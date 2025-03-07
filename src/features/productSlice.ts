import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, FilterState, SortOption } from "../data/types";
import { products } from "../data/productData";
import { RootState } from "../main";
interface ProductState {
    items:Product[];
    filters: FilterState;
    searchTerm: string;
}

const getMaxPrice = () => {
    return Math.max(...products.map((p) => p.originalPrice));
  };

const initialState:ProductState = {
    items:products,
    filters: {
        category: "All Categories",
        priceRange: [0, getMaxPrice()],
        brands: [],
        sortBy: "popularity"
      },
      searchTerm: ""
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
          state.filters.category = action.payload;
          state.filters.brands = [];
        },
        setBrands: (state, action: PayloadAction<string[]>) => {
          state.filters.brands = action.payload;
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
          state.filters.priceRange = action.payload;
        },
        setSortBy: (state, action: PayloadAction<SortOption>) => {
          state.filters.sortBy = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
          state.searchTerm = action.payload.toLowerCase();
        }
      }
})

export const selectFilteredProducts = (state: RootState) => {
    let filteredProducts = [...state.products.items];
    const { filters, searchTerm } = state.products;
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }
    if (filters.category !== "All Categories") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }
      filteredProducts = filteredProducts.filter(
      (product) =>
        product.originalPrice >= filters.priceRange[0] &&
        product.originalPrice <= filters.priceRange[1]
    );
    switch (filters.sortBy) {
      case "price-low":
        filteredProducts.sort((a, b) => a.originalPrice - b.originalPrice);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.originalPrice - a.originalPrice);
        break;
      case "name-asc":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    return filteredProducts;
  };
  
  export const selectFilters = (state: RootState) => state.products.filters;
  export const selectSearchTerm = (state: RootState) => state.products.searchTerm;
  export const selectAllProducts = (state: RootState) => state.products.items;
  
  export const {
    setCategory,
    setBrands,
    setPriceRange,
    setSortBy,
    setSearchTerm
  } = productSlice.actions;
  
  export default productSlice.reducer;