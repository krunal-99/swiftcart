import { API_URL, handleError } from "./utils";

export const getUserById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    const result = await response.json();
    if (result.status === "success") {
      return result.data;
    } else {
      handleError(result.message);
    }
  } catch (error) {
    console.error("Error fetching user data.");
    throw error;
  }
};
