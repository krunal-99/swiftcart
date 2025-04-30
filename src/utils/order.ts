import axiosInstance from "./instance";

export const getOrderByUser = async () => {
  const response = await axiosInstance.get("/orders");
  return response.data.data;
};

export const getOrderBySessionId = async (sessionId: string) => {
  const response = await axiosInstance.get(`/orders/session/${sessionId}`);
  return response.data.data;
};
