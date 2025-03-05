import CartItems from "../components/CartItems";
import CartBoxes from "../components/CartBoxes";
import { Box } from "@mui/material";

const Cart = () => {
  return (
    <Box mb={5} mt="100px" px={2}>
      <CartItems />
      <CartBoxes />
    </Box>
  );
};

export default Cart;
