import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { ShopPath } from "../constants/constants";

const EmptyCart = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "90%", lg: "80%" },
        mx: "auto",
        my: 3,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: 2,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        padding: 4,
        textAlign: "center",
        animation: "fadeIn 0.5s ease-in",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <ShoppingCartOutlinedIcon
        sx={{
          fontSize: 80,
          color: "#252b42",
          opacity: 0.2,
          mb: 2,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      <Typography
        variant="h5"
        sx={{
          color: "#252b42",
          fontWeight: 600,
          mb: 2,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Your Cart is Empty
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          mb: 3,
          fontSize: "1.1rem",
          fontStyle: "italic",
        }}
      >
        Looks like you haven't found anything you love yet!
      </Typography>
      <NavLink to={ShopPath}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#252b42",
            color: "white",
            padding: "10px 30px",
            borderRadius: "25px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            "&:hover": {
              backgroundColor: "#1a2238",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Start Shopping
        </Button>
      </NavLink>
    </Box>
  );
};

export default EmptyCart;
