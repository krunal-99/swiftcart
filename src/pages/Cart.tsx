import CartItems from "../sections/CartItems";
import CartBoxes from "../sections/CartBoxes";
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
