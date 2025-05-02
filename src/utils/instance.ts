import axios from "axios";
import { API_URL, handleError } from "./utils";
import { LoginPath } from "../constants/constants";

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
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { status } = response;
    switch (status) {
      case 200:
        return response;
      case 201:
        console.log("Resource created successfully");
        return response;
      default:
        return response;
    }
  },
  (error) => {
    const { response } = error;
    const message = response?.data?.message || "Something went wrong";

    switch (response?.status) {
      case 401:
        localStorage.removeItem("access_token");
        handleError("Unauthorized access. Please login again.");
        window.location.href = LoginPath;
        break;
      case 402:
        handleError(response.data.data);
        break;
      case 404:
        handleError("Requested resource not found.");
        break;
      default:
        Promise.reject(new Error(message));
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
