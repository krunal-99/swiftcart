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
