import axiosInstance from "./instance";

export const getOrderByUser = async (userId: number) => {
  const response = await axiosInstance.get(`/orders/${userId}`);
  return response.data.data;
};

export const getOrderBySessionId = async (sessionId: string) => {
  const response = await axiosInstance.get(`/orders/session/${sessionId}`);
  return response.data.data;
};
