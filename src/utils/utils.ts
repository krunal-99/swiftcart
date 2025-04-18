import { toast } from "react-toastify";
import { Address, Order } from "../data/types";

export const API_URL = "http://localhost:4000";

export const handleSuccess = (msg: string) => {
  toast.success(msg);
};

export const handleError = (msg: string | string[]) => {
  const errors = Array.isArray(msg)
    ? msg
    : msg.split(",").map((err) => err.trim());

  errors.forEach((error) => {
    toast.error(error);
  });
};

export const handleInfo = (msg: string) => {
  toast.info(msg);
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getStatusChipColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "success";
    case "processing":
      return "info";
    case "shipped":
      return "default";
    default:
      return "default";
  }
};

export const calculateOrderTotals = (order: Order | null) => {
  if (!order || !order.items) {
    return { totalQuantity: 0, totalAmount: "0.00" };
  }

  const totalQuantity = order.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalAmount = order.items
    .reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  return { totalQuantity, totalAmount };
};

export const uploadImageToCloudinary = async (file: File) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "swiftcart");
  data.append("cloud_name", "dq0x26dcc");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dq0x26dcc/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const result = await res.json();
  return result.url;
};
