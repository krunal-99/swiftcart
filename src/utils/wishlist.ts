import axiosInstance from "./instance";
import { handleError, handleSuccess } from "./utils";

export const getWishListItems = async (userId: number) => {
  const response = await axiosInstance.get(`/wishlist/${userId}`);
  return response.data.data;
};

export const addToWishlist = async (userId: number, productId: number) => {
  if (!userId) {
    handleError("Please login to add to wishlist");
    return;
  }
  const response = await axiosInstance.post(
    "/wishlist/add",
    JSON.stringify({ userId, productId })
  );
  handleSuccess(response.data.data);
  return response.data.data;
};

export const removeFromWishlist = async (wishlistId: number) => {
  const response = await axiosInstance.delete(`/wishlist/remove/${wishlistId}`);
  handleSuccess(response.data.message);
  return response.data.data;
};
