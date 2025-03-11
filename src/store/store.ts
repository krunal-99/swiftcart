import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishListSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
