import axiosInstance from "./instance";
import { handleError, handleSuccess } from "./utils";

export const getCartItems = async (userId: number) => {
  const response = await axiosInstance.get(`/cart/${userId}`);
  return {
    data: response.data.data,
    totalCount: response.data.totalCount,
  };
};

export const removeFromCart = async (itemId: number) => {
  const response = await axiosInstance.delete(`/cart/${itemId}`);
  handleSuccess(`${response.data.message}`);
  return response.data;
};

export const updateCartItem = async (itemId: number, quantity: number) => {
  const response = await axiosInstance.patch(
    `/cart/${itemId}`,
    JSON.stringify({ quantity })
  );
  if (response.data.status === "success") {
    handleSuccess("Cart updated successfully");
  } else {
    handleError(`${response.data.message}`);
  }
  return response.data;
};

export const clearCartItems = async (userId: number) => {
  const response = await axiosInstance.delete(`/cart/clear/${userId}`);
  handleSuccess("Cart cleared successfully");
  return response.data;
};

export const addToCart = async (
  userId: number,
  productId: number,
  quantity: number = 1,
  selectedColor: string
) => {
  try {
    const response = await axiosInstance.post(
      "/cart",
      JSON.stringify({ userId, productId, quantity, selectedColor })
    );
    handleSuccess("Item added to cart successfully");
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
