import axiosInstance from "./instance";
import { handleSuccess } from "./utils";

export const getCartItems = async () => {
  const response = await axiosInstance.get("/cart");
  return {
    data: response.data.data,
    totalCount: response.data.totalCount,
  };
};

export const removeFromCart = async (itemId: number) => {
  const response = await axiosInstance.delete(`/cart/${itemId}`);
  return response.data;
};

export const updateCartItem = async (itemId: number, quantity: number) => {
  const response = await axiosInstance.patch(
    `/cart/${itemId}`,
    JSON.stringify({ quantity })
  );
  return response.data;
};

export const clearCartItems = async () => {
  const response = await axiosInstance.delete("/cart/clear");
  return response.data;
};

export const addToCart = async (
  productId: number,
  quantity: number = 1,
  selectedColor: string
) => {
  try {
    const response = await axiosInstance.post(
      "/cart",
      JSON.stringify({ productId, quantity, selectedColor })
    );
    handleSuccess("Item added to cart successfully");
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
