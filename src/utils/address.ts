const API_URL = "http://localhost:4000";

export const saveAddress = async (addressData: Record<string, any>) => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("Authentication required");
  }

  const response = await fetch(`${API_URL}/address`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    body: JSON.stringify(addressData),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const result = await response.json();
  return result;
};

export const getUserAddresses = async (userId: number) => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("Authentication required");
  }

  const response = await fetch(`${API_URL}/address/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const result = await response.json();
  return result;
};
