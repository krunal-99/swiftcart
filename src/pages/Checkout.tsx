import { Link } from "react-router-dom";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import CheckoutForm from "../forms/CheckOutForm";
import OrderSummary from "../sections/OrderSummary";
import { Box, Typography, Container, Paper } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { getCartItems } from "../utils/cart";
import { CartItems } from "../data/types";
import { saveAddress } from "../utils/address";
import { handleSuccess } from "../utils/utils";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { HomePath } from "../constants/constants";

const Checkout = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();

  console.log("User", user);
  const { data: cartItems, isLoading } = useQuery({
    queryKey: ["cart", user?.id],
    queryFn: () => getCartItems(user?.id!),
    enabled: !!user?.id,
  });

  const items = cartItems?.data[0].items || [];
  const [resetFormCallback] = useState<() => void>(() => () => {});

  const addressMutation = useMutation({
    mutationFn: saveAddress,
    onSuccess: (data) => {
      console.log("Address Saved: ", data);
      handleSuccess("Address successfully saved");
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
      resetFormCallback();
    },
    onError: (error) => {
      console.error("Error saving address:", error);
    },
  });

  const handleAddressSaved = () => {};

  const handlePlaceOrder = async (formData: Record<string, any>) => {
    console.log("formData", formData);
    if (formData.saveAddressOnly) {
      addressMutation.mutate(formData);
    } else if (formData.addressId) {
      console.log("Placing order with address ID:", formData.addressId);
      const stripePromise = await loadStripe(
        import.meta.env.VITE_STRIPE_KEY as string
      );
      const body = {
        products: items,
        email: user?.email,
      };
      const headers = { "Content-Type": "application/json" };
      try {
        const response = await fetch(
          "http://localhost:4000/payment/create-checkout-session",
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
        const result = await stripePromise?.redirectToCheckout({
          sessionId: session.id,
        });
        if (result?.error) {
          console.log(result.error.message);
        }
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
            onAddressSaved={handleAddressSaved}
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
