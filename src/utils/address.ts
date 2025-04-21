import axiosInstance from "./instance";

export const saveAddress = async (addressData: Record<string, any>) => {
  const response = await axiosInstance.post(
    "/address",
    JSON.stringify(addressData)
  );
  const result = await response.data;
  return result;
};

export const getUserAddresses = async (userId: number) => {
  const response = await axiosInstance.get(`/address/user/${userId}`);
  const result = await response.data;
  return result;
};
