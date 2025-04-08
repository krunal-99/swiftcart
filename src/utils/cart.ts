import { handleSuccess } from "./utils";

const API_URL = "http://localhost:4000";

export const getCartItems = async (userId: number) => {
  try {
    const response = await fetch(`${API_URL}/cart/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch cart items: ${response.statusText}`);
    }
    const result = await response.json();
    return {
      data: result.data,
      totalCount: result.totalCount,
    };
  } catch (error) {
    console.error("Error fetching cart items.");
    throw error;
  }
};

export const removeFromCart = async (itemId: number) => {
  try {
    const response = await fetch(`${API_URL}/cart/${itemId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch cart items: ${response.statusText}`);
    }
    const result = await response.json();
    handleSuccess(`${result.message}`);
    return result.data;
  } catch (error) {
    console.error("Error removing cart item.");
    throw error;
  }
};
