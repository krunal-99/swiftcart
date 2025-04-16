import { API_URL } from "./utils";

export const getOrderByUser = async (userId: number) => {
  console.log("User ID:", userId);
  try {
    const response = await fetch(`${API_URL}/orders/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch cart items: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching cart items.");
    throw error;
  }
};

export const getOrderById = async (orderId: string) => {
  try {
    const response = await fetch(`${API_URL}/orders/order/${orderId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const getOrderBySessionId = async (sessionId: string) => {
  try {
    const response = await fetch(`${API_URL}/orders/session/${sessionId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};
