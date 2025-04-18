import { FilterParams, Product } from "../data/types";
import { API_URL } from "./utils";

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getFilteredProducts = async ({
  page = 1,
  search = "",
  category = 1,
  priceRange = [0, 100000],
  brands = [],
  sortBy = "popularity",
}: FilterParams) => {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: "9",
    search,
    category: category.toString(),
    minPrice: priceRange[0].toString(),
    maxPrice: priceRange[1].toString(),
    sortBy,
  });

  if (brands.length > 0) {
    query.append("brands", brands.join(","));
  }

  try {
    const response = await fetch(`${API_URL}/products/filters?${query}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getAllProducts = async () => {
  try {
    const products = await fetch(`${API_URL}/products`);
    const response = await products.json();
    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getRandomProducts = (products: Product[], count: number) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getFeaturedProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products/featured`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getAdProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products/ad`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data[0];
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getAvailableBrands = async (categoryId: number) => {
  try {
    const response = await fetch(`${API_URL}/brands?category=${categoryId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch brands: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getMaxPrice = async () => {
  try {
    const response = await fetch(`${API_URL}/products/max-price`);
    if (!response.ok) {
      throw new Error(`Failed to fetch max price: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching max price:", error);
    return 100000;
  }
};
