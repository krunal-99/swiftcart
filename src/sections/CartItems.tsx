import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { clearCart } from "../store/cartSlice";
import { useEffect } from "react";
import { getListTotal } from "../store/wishListSlice";
import EmptyCart from "./EmptyCart";
import CartTable from "./CartTable";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "../main";
import { getCartItems } from "../utils/cart";
import { CartTableSkeleton } from "./CartTableSkeleton";

const CartItems = () => {
  const appTheme = useTheme();
  const isMobile = useMediaQuery(appTheme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const userId = user && user?.id;

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () =>
      userId ? getCartItems(userId) : Promise.reject("User ID is undefined"),
  });

  useEffect(() => {
    dispatch(getListTotal());
  }, [cart, dispatch]);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={{ xs: "center", sm: "center" }}
        spacing={{ xs: 2, sm: 0 }}
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "90%", lg: "80%" },
          mx: "auto",
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: "#252b42",
            fontSize: { xs: "1.3rem", sm: "2rem" },
          }}
        >
          Shopping Cart
        </Typography>
        {!isLoading && cart && cart.data?.length > 0 && (
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(clearCart())}
            sx={{
              fontWeight: 700,
              width: { xs: "50px", sm: "200px" },
              minHeight: "40px",
              padding: { xs: "10px", sm: "10px 20px" },
              borderRadius: "25px",
              background: "linear-gradient(90deg, #ff4d4f 0%, #ff7875 100%)",
              boxShadow: "0 4px 12px rgba(255, 77, 79, 0.3)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "linear-gradient(90deg, #ff7875 0%, #ff4d4f 100%)",
                transform: "translateY(-3px)",
                boxShadow: "0 6px 16px rgba(255, 77, 79, 0.5)",
              },
              "&:active": {
                transform: "translateY(0)",
                boxShadow: "0 2px 8px rgba(255, 77, 79, 0.2)",
              },
            }}
          >
            {!isMobile ? "Clear Cart" : <DeleteIcon />}{" "}
          </Button>
        )}
      </Stack>

      {isLoading ? (
        <CartTableSkeleton />
      ) : cart && cart.data[0].items.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartTable cart={cart?.data} />
      )}
    </>
  );
};

export default CartItems;
