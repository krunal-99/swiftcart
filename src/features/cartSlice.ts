import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../data/types";
import {toast} from "react-toastify"

interface cartItemsSchema {
    cartItems:Cart[];
    totalCartQuantity:number;
    totalCartAmount:number;
}

const initialState:cartItemsSchema = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") as string) : [], 
    totalCartQuantity:0,
    totalCartAmount:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0 ) {
                if(state.cartItems[itemIndex].cartQuantity > 4) {
                    toast.error(`${state.cartItems[itemIndex].title}'s quantity cannot exceed 5.`)
                    return;
                }
                state.cartItems[itemIndex].cartQuantity +=1
                toast.info(`${state.cartItems[itemIndex].title}'s quantity increased in cart.`)
            } else{
                state.cartItems.push(action.payload)
                toast.success(`${action.payload.title} added to cart successfully.`)
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action) {
            const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
            toast.error(`${action.payload.title} removed from cart successfully.`)
        },
        decreaseQuantity(state,action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`${state.cartItems[itemIndex].title}'s quantity decreased in cart.`)
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                state.cartItems = nextCartItems
                toast.error(`${action.payload.title} removed from cart successfully.`)
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        clearCart(state, action) {
            state.cartItems = []
            toast.error(`Cart cleared successfully.`)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        getTotals(state,action) {
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity
                return cartTotal;
            }, {total:0, quantity:0})
            state.totalCartAmount = total
            state.totalCartQuantity = quantity
        }
    }
})

export const {addToCart, removeFromCart, decreaseQuantity, clearCart, getTotals} = cartSlice.actions
export default cartSlice.reducer