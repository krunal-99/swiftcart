import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import { useEffect } from "react";
import { getListTotal } from "../features/wishListSlice";

const CartItems = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const appTheme = useTheme();
  const isMobile = useMediaQuery(appTheme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals({}));
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
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(clearCart(cart))}
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
      </Stack>

      {cart.cartItems?.length === 0 ? (
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
          <NavLink to="/shop">
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
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: { xs: "100%", md: "90%", lg: "80%" },
            mx: "auto",
            my: 3,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 3,
            overflowX: "auto",
          }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="Cart Table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell sx={{ fontWeight: 600 }}>Image</TableCell>
                <TableCell align="left" sx={{ fontWeight: 600 }}>
                  Description
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Color
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Price
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Quantity
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Total
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Remove
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.cartItems?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Box
                      component="img"
                      src={item.imageUrl}
                      sx={{ height: 80, width: 80, borderRadius: 1 }}
                    />
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: 16, fontWeight: 600, color: "#333" }}
                  >
                    {item.title}
                  </TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Box
                        width={20}
                        height={20}
                        borderRadius="50%"
                        sx={{
                          cursor: "pointer",
                          backgroundColor: item.color,
                          border: "1px solid #ddd",
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    ₹ {item.price.toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      size="small"
                      variant="outlined"
                      aria-label="Basic button group"
                    >
                      <Button
                        onClick={() => dispatch(decreaseQuantity(item))}
                        sx={{
                          backgroundColor: "#252b42",
                          color: "white",
                          borderRadius: 0,
                        }}
                      >
                        <RemoveIcon sx={{ width: "15px" }} />
                      </Button>
                      <Button sx={{ fontWeight: 600 }}>
                        {item.cartQuantity}
                      </Button>
                      <Button
                        onClick={() => dispatch(addToCart(item))}
                        sx={{
                          backgroundColor: "#fafafa",
                          color: "black",
                          borderRadius: 0,
                        }}
                      >
                        <AddIcon sx={{ width: "15px" }} />
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    ₹ {item.price * item.cartQuantity}
                  </TableCell>
                  <TableCell>
                    <Box display="flex" justifyContent="center">
                      <IconButton
                        onClick={() => dispatch(removeFromCart(item))}
                        sx={{
                          border: "2px solid #fafafa",
                          borderRadius: 0,
                        }}
                      >
                        <CloseIcon sx={{ width: "20px" }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CartItems;
