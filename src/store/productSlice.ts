import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState, Product } from "../data/types";

const initialState: ProductState = {
  category: 1,
  brands: [],
  filteredProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
    setBrands(state, action: PayloadAction<string[]>) {
      state.brands = action.payload;
    },
    setFilteredProducts(state, action: PayloadAction<Product[]>) {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setCategory, setBrands, setFilteredProducts } =
  productSlice.actions;

export const selectCategory = (state: any) => state.products.category;
export const selectFilteredProducts = (state: any) =>
  state.products.filteredProducts;

export default productSlice.reducer;
