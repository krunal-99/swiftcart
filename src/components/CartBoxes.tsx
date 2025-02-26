import { Box, Button, Stack, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

const CartBoxes = () => {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth={{ xs: "100%", sm: "90%", md: "80%" }}
        gap={2}
        margin="auto"
        mt={4}
      >
        {[
          { label: "Subtotal", value: "₹ 6000" },
          { label: "Shipping", value: "₹ 0" },
          { label: "Total", value: "₹ 6000" },
        ].map((item, index) => (
          <Stack
            key={index}
            width={{ xs: "100%", sm: "90%", md: "220px", lg: "32%" }}
            justifyContent="space-between"
            border="2px solid #d5d2d2"
            borderRadius={2}
            direction="row"
            padding={2}
            boxShadow={3}
            sx={{
              backgroundColor: "#fafafa",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography fontWeight={600}>{item.label}</Typography>
            <Typography fontWeight={700}>{item.value}</Typography>
          </Stack>
        ))}
      </Box>
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        maxWidth={{ xs: "100%", md: "90%", lg: "80%" }}
        mx="auto"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={{ xs: 2, sm: 0 }}
        my="20px"
      >
        <Button variant="outlined" startIcon={<ReplyAllIcon />}>
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          endIcon={<ShoppingCartCheckoutIcon />}
          sx={{ backgroundColor: "#252b42", fontWeight: 700 }}
        >
          Checkout
        </Button>
      </Stack>
    </>
  );
};

export default CartBoxes;
