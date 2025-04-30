import axiosInstance from "./instance";
import { handleError } from "./utils";

export const getUserById = async () => {
  const response = await axiosInstance.get("/api/auth");
  if (response.data.status === "success") {
    return response.data.data;
  } else {
    handleError(response.data.message);
  }
};

export const updateUserProfile = async ({
  userData,
}: {
  userData: {
    name?: string;
    email?: string;
    password?: string;
    imageUrl?: string;
  };
}) => {
  const response = await axiosInstance.put(
    "/api/auth",
    JSON.stringify(userData)
  );
  return response.data;
};
