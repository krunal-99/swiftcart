import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import CheckoutForm from "../forms/CheckOutForm";
import OrderSummary from "../sections/OrderSummary";
import { Box, Typography, Container, Paper } from "@mui/material";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = [
    {
      id: "1",
      name: "Premium T-Shirt",
      price: 29.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: "2",
      name: "Designer Jeans",
      price: 89.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  interface FormData {
    [key: string]: any;
  }

  const handlePlaceOrder = (formData: FormData): void => {
    setLoading(true);
    setTimeout(() => {
      console.log("Order placed with data:", formData);
      console.log("Cart items:", cartItems);
      alert("Order Placed Successfully.");
      setLoading(false);
    }, 1500);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const orderSummary = { subtotal, shipping, tax, total, items: cartItems };

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
          gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
          gap: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 3, bgcolor: "background.paper" }}
        >
          <CheckoutForm onSubmit={handlePlaceOrder} loading={loading} />
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 3, bgcolor: "background.paper" }}
        >
          <OrderSummary summary={orderSummary} loading={loading} />
        </Paper>
      </Box>
    </Container>
  );
};

export default Checkout;
