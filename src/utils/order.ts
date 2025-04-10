const API_URL = "http://localhost:4000";

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
