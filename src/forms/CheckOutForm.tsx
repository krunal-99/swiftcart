import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { LocalShipping as TruckIcon } from "@mui/icons-material";

interface CheckoutFormProps {
  onSubmit: (formData: Record<string, any>) => void;
  loading: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 700,
        mx: "auto",
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
        <CardHeader
          title="Shipping Information"
          subheader="Where should we deliver your order?"
          avatar={<TruckIcon color="primary" />}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Street Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            required
          />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <TextField
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Box>
        </CardContent>
      </Card>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{ py: 1.5, fontSize: 16 }}
      >
        {loading ? "Processing..." : "Place Order"}
      </Button>
    </Box>
  );
};

export default CheckoutForm;
