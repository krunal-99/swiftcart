import { createSlice } from "@reduxjs/toolkit";
import { cartItemsSchema } from "../data/types";
import { toast } from "react-toastify";

const initialState: cartItemsSchema = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, color, title } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.color === color
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity >= 5) {
          toast.error(`${title}'s quantity cannot exceed 5.`);
          return;
        }
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`${title}'s quantity increased in cart.`);
      } else {
        state.cartItems.push(action.payload);
        toast.success(`${action.payload.title} added to cart successfully.`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const { id, color, title } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => !(item.id === id && item.color === color)
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${title} removed from cart successfully.`);
    },
    decreaseQuantity(state, action) {
      const { id, title, color } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.color === color
      );

      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info(`${title}'s quantity decreased in cart.`);
        } else {
          state.cartItems.splice(itemIndex, 1);
          toast.error(
            `${action.payload.title} removed from cart successfully.`
          );
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
      toast.error("Cart cleared successfully.");
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          cartTotal.total += price * cartQuantity;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.totalCartAmount = total;
      state.totalCartQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
