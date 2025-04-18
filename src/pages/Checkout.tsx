import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import CheckoutForm from "../forms/CheckOutForm";
import OrderSummary from "../sections/OrderSummary";
import {
  Box,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Fade,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { getCartItems } from "../utils/cart";
import { CartItems } from "../data/types";
import { saveAddress } from "../utils/address";
import { API_URL, handleInfo, handleSuccess } from "../utils/utils";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { HomePath, ShopPath } from "../constants/constants";

const Checkout = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();
  const { data: cartItems, isLoading } = useQuery({
    queryKey: ["cart", user?.id],
    queryFn: () => getCartItems(user?.id!),
    enabled: !!user?.id,
  });
  const navigate = useNavigate();

  const items = cartItems?.data[0].items || [];
  const cartId = cartItems?.data[0]?.id;
  const [resetFormCallback] = useState<() => void>(() => () => {});

  useEffect(() => {
    if (!isLoading && (!items || items.length === 0)) {
      handleInfo(
        "Your cart is empty. Please add items to proceed to checkout."
      );
      navigate(ShopPath);
    }
  }, [isLoading, items, navigate]);

  const addressMutation = useMutation({
    mutationFn: saveAddress,
    onSuccess: () => {
      handleSuccess("Address successfully saved");
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
      resetFormCallback();
    },
    onError: (error) => {
      console.error("Error saving address:", error);
    },
  });

  const handlePlaceOrder = async (formData: Record<string, any>) => {
    if (formData.saveAddressOnly) {
      addressMutation.mutate(formData);
    } else if (formData.addressId) {
      const stripePromise = await loadStripe(
        import.meta.env.VITE_STRIPE_KEY as string
      );
      const body = {
        products: items,
        email: user?.email,
        userId: user?.id,
        addressId: formData.addressId,
        cartId,
      };
      const headers = { "Content-Type": "application/json" };
      try {
        const response = await fetch(
          `${API_URL}/payment/create-checkout-session`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const session = await response.json();
        await stripePromise?.redirectToCheckout({
          sessionId: session.id,
        });
      } catch (error) {
        console.error("Error during checkout:", error);
      }
    }
  };
  const subtotal = items.reduce(
    (sum: number, item: CartItems) =>
      sum + Number(item.product.salePrice) * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const orderSummary = { subtotal, shipping, total, items };

  if (isLoading || (!isLoading && (!items || items.length === 0))) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          bgcolor: "grey.100",
        }}
      >
        <Fade in={true} timeout={500}>
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress
              size={60}
              thickness={4}
              sx={{ color: "primary.main", mb: 2 }}
            />
            <Typography
              variant="h6"
              sx={{ color: "text.secondary", fontWeight: "medium" }}
            >
              Loading your cart...
            </Typography>
          </Box>
        </Fade>
      </Box>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 6, minHeight: "100vh", bgcolor: "grey.100" }}
    >
      <Box
        component={Link}
        to={HomePath}
        sx={{
          display: "flex",
          alignItems: "center",
          color: "primary.main",
          mb: 3,
          textDecoration: "none",
          "&:hover": { color: "primary.dark", textDecoration: "underline" },
          fontWeight: "medium",
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 22, mr: 0.8 }} />
        <Typography variant="body1">Continue Shopping</Typography>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "primary.main",
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        Checkout
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" },
          gap: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 3, bgcolor: "background.paper" }}
        >
          <CheckoutForm
            onSubmit={handlePlaceOrder}
            loading={addressMutation.isLoading}
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 3, bgcolor: "background.paper" }}
        >
          <OrderSummary summary={orderSummary} loading={isLoading} />
        </Paper>
      </Box>
    </Container>
  );
};

export default Checkout;
