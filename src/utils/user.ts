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

export const updateUserProfile = async ({
  userId,
  userData,
  token,
}: {
  userId: number;
  userData: {
    name?: string;
    email?: string;
    password?: string;
    imageUrl?: string;
  };
  token: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.data || "Failed to update profile");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};
