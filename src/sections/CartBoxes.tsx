import { Box, Button, Stack, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListTotal } from "../store/wishListSlice";
import { RootState } from "../main";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../utils/cart";
import { CartItems } from "../data/types";

const CartBoxes = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const userId = user && user?.id;
  const { data: cart } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () =>
      userId ? getCartItems(userId) : Promise.reject("User ID is undefined"),
  });

  const totalAmount: number =
    cart &&
    cart.data[0]?.items.reduce((acc: number, item: CartItems) => {
      const price =
        typeof item.product.salePrice === "string"
          ? parseFloat(item.product.salePrice)
          : item.product.salePrice;
      return acc + price * item.quantity;
    }, 0);

  useEffect(() => {
    dispatch(getListTotal());
  }, [cart, dispatch]);

  const cartFinances = [
    { label: "Subtotal", value: `₹ ${totalAmount || 0}` },
    { label: "Shipping", value: "₹ 0" },
    { label: "Total", value: `₹ ${totalAmount || 0}` },
  ];

  return (
    <>
      {cart?.data.length > 0 && (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          maxWidth={{ xs: "100%", sm: "90%", md: "80%" }}
          gap={2}
          margin="auto"
          mt={4}
        >
          {cartFinances.map((item, index) => (
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
      )}
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
          <NavLink
            to="/shop"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Continue Shopping
          </NavLink>
        </Button>
        {cart?.data[0].items.length > 0 && (
          <NavLink to="/checkout">
            <Button
              variant="contained"
              fullWidth
              endIcon={<ShoppingCartCheckoutIcon />}
              sx={{ backgroundColor: "#252b42", fontWeight: 700 }}
            >
              Checkout
            </Button>
          </NavLink>
        )}
      </Stack>
    </>
  );
};

export default CartBoxes;
