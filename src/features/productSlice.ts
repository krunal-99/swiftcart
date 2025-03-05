import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../data/types";
import { products } from "../data/productData";
interface ProductState {
    items:Product[];
}

const initialState:ProductState = {
    items:products
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{}
})

export default productSlice.reducer