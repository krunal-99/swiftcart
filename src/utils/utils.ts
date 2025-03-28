import { Product } from "../data/types";
import { products } from "../data/productData";
import { toast } from "react-toastify";

export const getRandomProducts = (products: Product[], count: number) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getMaxPrice = () => {
  return Math.max(...products.map((p) => p.originalPrice));
};

export const handleSuccess = (msg: string) => {
  toast.success(msg);
};

export const handleError = (msg: string | string[]) => {
  const errors = Array.isArray(msg)
    ? msg
    : msg.split(",").map((err) => err.trim());

  errors.forEach((error) => {
    toast.error(error);
  });
};

export const handleInfo = (msg: string) => {
  toast.info(msg);
};

export const getCategories = async () => {
  try {
    const response = await fetch("http://localhost:4000/categories");
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getAllProducts = async () => {
  try {
    const products = await fetch("http://localhost:4000/products");
    const response = await products.json();
    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getFeaturedProducts = async () => {
  try {
    const response = await fetch("http://localhost:4000/products/featured");
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getAdProducts = async () => {
  try {
    const response = await fetch("http://localhost:4000/products/ad");
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:4000/products/${id}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
