import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const cartHeading = ["Color", "Price", "Quantity", "Total", "Remove"];

const CartTable = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
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
            {cartHeading.map((heading) => (
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                {heading}
              </TableCell>
            ))}
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
                  <Button sx={{ fontWeight: 600 }}>{item.cartQuantity}</Button>
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
  );
};

export default CartTable;
