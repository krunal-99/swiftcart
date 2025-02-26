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
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const createItem = (
  imageUrl: string,
  description: string,
  color: string,
  quantity: number,
  price: number
) => {
  return { id: Math.random(), imageUrl, description, color, quantity, price };
};

const cartItems = [
  createItem("./src/assets/images/cart1.svg", "Mens Hoodie", "black", 1, 1000),
  createItem("./src/assets/images/cart2.svg", "Mens Shirt", "blue", 1, 2000),
  createItem(
    "./src/assets/images/cart3.svg",
    "Womens Jacket",
    "orange",
    2,
    3000
  ),
];

const CartItems = () => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ color: "#252b42", mb: 3 }}
      >
        Shopping Cart
      </Typography>
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
                Quantity
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                Remove
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
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
                  {item.description}
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
                <TableCell align="center">
                  <ButtonGroup
                    size="small"
                    variant="outlined"
                    aria-label="Basic button group"
                  >
                    <Button
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
                <TableCell align="center">
                  <IconButton
                    sx={{ border: "2px solid #fafafa", borderRadius: 0 }}
                  >
                    <CloseIcon sx={{ width: "20px" }} />
                  </IconButton>
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  ₹ {item.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartItems;
