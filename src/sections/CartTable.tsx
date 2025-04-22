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
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CartData } from "../data/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart, updateCartItem } from "../utils/cart";
import { RootState } from "../main";

const cartHeading = ["Color", "Price", "Quantity", "Total", "Remove"];

const CartTable: React.FC<{ cart: CartData[] }> = ({ cart }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();
  const items = cart[0]?.items || [];

  const updateMutation = useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: number; quantity: number }) =>
      updateCartItem(itemId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", user!.id] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: (itemId: number) => removeFromCart(itemId),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({ queryKey: ["cart", user?.id] });
    },
  });

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateMutation.mutate({ itemId, quantity: newQuantity });
    }
  };

  const handleRemove = (itemId: number) => {
    removeMutation.mutate(itemId);
  };

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
            {cartHeading.map((heading, idx) => (
              <TableCell align="center" key={idx} sx={{ fontWeight: 600 }}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Box
                  component="img"
                  src={item.product.imageUrls[0]}
                  sx={{ height: 80, width: 80, borderRadius: 1 }}
                />
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 16, fontWeight: 600, color: "#333" }}
              >
                {item.product.title}
              </TableCell>
              <TableCell align="center">
                <Box display="flex" justifyContent="center">
                  <Box
                    width={20}
                    height={20}
                    borderRadius="50%"
                    sx={{
                      cursor: "pointer",
                      backgroundColor: item.selectedColor,
                      border: "1px solid #ddd",
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                ₹{" "}
                {typeof item.product.salePrice === "string"
                  ? parseFloat(item.product.salePrice)
                  : item.product.salePrice}
              </TableCell>
              <TableCell align="center">
                <ButtonGroup
                  size="small"
                  variant="outlined"
                  aria-label="Basic button group"
                >
                  <Button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    sx={{
                      backgroundColor: "#252b42",
                      color: "white",
                      borderRadius: 0,
                    }}
                  >
                    <RemoveIcon sx={{ width: "15px" }} />
                  </Button>
                  <Button sx={{ fontWeight: 600 }}>{item.quantity}</Button>
                  <Button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
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
                ₹{" "}
                {typeof item.product.salePrice === "string"
                  ? parseFloat(item.product.salePrice) * item.quantity
                  : item.product.salePrice * item.quantity}
              </TableCell>
              <TableCell>
                <Box display="flex" justifyContent="center">
                  <IconButton
                    onClick={() => handleRemove(item.id)}
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
