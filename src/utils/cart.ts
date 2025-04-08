import { handleError, handleSuccess } from "./utils";

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

export const updateCartItem = async (itemId: number, quantity: number) => {
  try {
    const response = await fetch(`${API_URL}/cart/${itemId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
      throw new Error(`Failed to update cart item: ${response.statusText}`);
    }
    const result = await response.json();
    if (result.status === "success") {
      handleSuccess("Cart updated successfully");
    } else {
      handleError(`${result.message}`);
    }
    return result.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

export const clearCartItems = async (userId: number) => {
  try {
    const response = await fetch(`${API_URL}/cart/clear/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to clear cart: ${response.statusText}`);
    }
    const result = await response.json();
    handleSuccess("Cart cleared successfully");
    return result.data;
  } catch (error) {
    console.error("Error clearing cart: ", error);
    throw error;
  }
};

export const addToCart = async (
  userId: number,
  productId: number,
  quantity: number = 1,
  selectedColor: string
) => {
  try {
    const response = await fetch(`${API_URL}/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId, quantity, selectedColor }),
    });
    if (!response.ok) {
      throw new Error(`Failed to add item to cart: ${response.statusText}`);
    }
    const result = await response.json();
    handleSuccess("Item added to cart successfully");
    return result.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
