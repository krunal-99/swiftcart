import { Product } from "../data/types";
import { products } from "../data/productData";

export const getRandomProducts = (products: Product[], count: number) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getMaxPrice = () => {
  return Math.max(...products.map((p) => p.originalPrice));
};
