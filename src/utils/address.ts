import { Address } from "../data/types";
import axiosInstance from "./instance";

export const saveAddress = async (addressData: Record<string, Address>) => {
  const response = await axiosInstance.post(
    "/address",
    JSON.stringify(addressData)
  );
  return response.data;
};

export const getUserAddresses = async () => {
  const response = await axiosInstance.get("/address/user");
  return response.data;
};
