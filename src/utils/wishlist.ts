import { API_URL, handleError, handleSuccess } from "./utils";

export const getWishListItems = async (userId: number) => {
  try {
    const response = await fetch(`${API_URL}/wishlist/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching wishlist items");
  }
};

export const addToWishlist = async (userId: number, productId: number) => {
  try {
    if (!userId) {
      handleError("Please login to add to wishlist");
      return;
    }
    const response = await fetch(`${API_URL}/wishlist/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    });
    if (!response.ok) {
      throw new Error(`Failed to add wishlist item: ${response.statusText}`);
    }
    const result = await response.json();
    handleSuccess(result.data);
    return result.data;
  } catch (error) {
    console.error("Error adding wishlist item.");
    throw error;
  }
};

export const removeFromWishlist = async (wishlistId: number) => {
  try {
    const response = await fetch(`${API_URL}/wishlist/remove/${wishlistId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to remove wishlist item: ${response.statusText}`);
    }
    const result = await response.json();
    handleSuccess(result.message);
    return result.data;
  } catch (error) {
    console.error("Error deleting wishlist item.");
    throw error;
  }
};
