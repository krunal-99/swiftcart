import { createSlice } from "@reduxjs/toolkit";
import { Wishlist } from "../data/types";
import { toast } from "react-toastify";

interface wishListType {
    list:Wishlist[],
    listQuantity:number
}

const storedWishlist = localStorage.getItem("wishlist");
const parsedWishlist: Wishlist[] = storedWishlist ? JSON.parse(storedWishlist) : [];

const initialState:wishListType = {
    list:parsedWishlist,
    listQuantity:parsedWishlist.length
}

const wishListSlice = createSlice({
    name:"wishlist", 
    initialState,
    reducers: {
        addToList(state, action) {
          state.list.push(action.payload);
          state.listQuantity = state.list.length;
          toast.success(`${action.payload.title} added to Wishlist successfully.`);
          localStorage.setItem("wishlist", JSON.stringify(state.list));
        },
        removeFromList(state,action) {
          state.list = state.list.filter((item) => item.id !== action.payload.id)
          state.listQuantity = state.list.length
          localStorage.setItem("wishlist", JSON.stringify(state.list))
          toast.error(`${action.payload.title} removed from Wishlist successfully.`)
        },
        getListTotal(state) {
          state.listQuantity = state.list.length;
        },
      },
})

export const {addToList, getListTotal, removeFromList} = wishListSlice.actions
export default wishListSlice.reducer