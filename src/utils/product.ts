import { FilterParams } from "../data/types";
import axiosInstance from "./instance";

export const getCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data.data;
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

  const response = await axiosInstance.get(`/products/filters?${query}`);
  return response.data.data;
};

export const getRandomProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data.data;
};

export const getFeaturedProducts = async () => {
  const response = await axiosInstance.get("/products/featured");
  return response.data.data;
};

export const getAdProducts = async () => {
  const response = await axiosInstance.get("/products/ad");
  return response.data.data;
};

export const getProductById = async (id: number) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data.data;
};

export const getAvailableBrands = async (categoryId: number) => {
  const response = await axiosInstance.get(`/brands?category=${categoryId}`);
  return response.data.data;
};

export const getMaxPrice = async () => {
  const response = await axiosInstance.get("/products/max-price");
  return response.data.data;
};
