import { Box } from "@mui/material";

import { useEffect } from "react";
import CartItems from "../components/CartItems";
import CartBoxes from "../components/CartBoxes";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box textAlign="center" mb={5} mt="100px" px={2}>
      <CartItems />
      <CartBoxes />
    </Box>
  );
};

export default Cart;
