import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
  Collapse,
} from "@mui/material";
import {
  LocalShipping as TruckIcon,
  LocationOn as MapPinIcon,
} from "@mui/icons-material";

interface CheckoutFormProps {
  onSubmit: (formData: Record<string, any>) => void;
  loading: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    sameAsShipping: true,
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    billingCountry: "",
    notes: "",
    saveInformation: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
        maxWidth: 600,
        mx: "auto",
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
        <CardHeader
          title="Contact Information"
          subheader="How can we reach you regarding your order?"
          avatar={<MapPinIcon color="primary" />}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
          />
        </CardContent>
      </Card>

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
              label="State/Province"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <TextField
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
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
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.sameAsShipping}
                onChange={handleChange}
                name="sameAsShipping"
              />
            }
            label="Billing address is the same as shipping address"
          />
          <Collapse in={!formData.sameAsShipping}>
            <TextField
              label="Billing Address"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              fullWidth
            />
          </Collapse>
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
