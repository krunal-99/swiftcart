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

const Checkout = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { data: cartItems, isLoading } = useQuery({
    queryKey: ["cart", user?.id],
    queryFn: () => getCartItems(user?.id!),
    enabled: !!user?.id,
  });

  const queryClient = useQueryClient();

  const addressMutation = useMutation({
    mutationFn: saveAddress,
    onSuccess: (data) => {
      console.log("Address Saved: ", data);
      handleSuccess("Address successfully saved");
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
    onError: (error) => {
      console.error("Error saving address:", error);
    },
  });

  const handlePlaceOrder = async (formData: Record<string, any>) => {
    if (formData.addressId) {
      console.log("Using existing address:", formData.addressId);
      handleSuccess("Order placed with existing address");
    } else {
      addressMutation.mutate(formData);
    }
  };

  const items = cartItems?.data[0]?.items || [];
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
        to="/"
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
