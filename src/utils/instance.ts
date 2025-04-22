import axios from "axios";
import { API_URL, handleError } from "./utils";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    handleError(error?.response?.data?.message || "Something went wrong!");
    console.error("Error : ", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
