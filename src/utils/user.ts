import axiosInstance from "./instance";
import { handleError } from "./utils";

export const getUserById = async (id: number) => {
  const response = await axiosInstance.get(`/api/auth/${id}`);
  if (response.data.status === "success") {
    return response.data.data;
  } else {
    handleError(response.data.message);
  }
};

export const updateUserProfile = async ({
  userId,
  userData,
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
  const response = await axiosInstance.put(
    `/api/auth/${userId}`,
    JSON.stringify(userData)
  );
  return response.data;
};
