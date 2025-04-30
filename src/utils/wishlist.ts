import axiosInstance from "./instance";
import { handleError, handleSuccess } from "./utils";

export const getWishListItems = async (userId: number) => {
  try {
    const response = await axiosInstance.get(`/wishlist/${userId}`, {
      headers: {
        "Cache-Control": "max-age=300",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

export const addToWishlist = async (userId: number, productId: number) => {
  if (!userId) {
    handleError("Please login to add to wishlist");
    return;
  }
  try {
    const response = await axiosInstance.post(
      "/wishlist/add",
      JSON.stringify({ userId, productId }),
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    handleSuccess(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    handleError("Failed to add item to wishlist");
    throw error;
  }
};

export const removeFromWishlist = async (wishlistId: number) => {
  try {
    const response = await axiosInstance.delete(
      `/wishlist/remove/${wishlistId}`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    handleSuccess(response.data.message);
    return response.data.data;
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    handleError("Failed to remove item from wishlist");
    throw error;
  }
};
