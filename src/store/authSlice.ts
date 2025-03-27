import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id?: number;
    name?: string;
    email?: string;
    imageUrl?: string;
  } | null;
  token: string | null;
}

const loadStateFromStorage = (): AuthState => {
  const token = localStorage.getItem("access_token");
  const userImg = localStorage.getItem("userImg");
  const userEmail = localStorage.getItem("userEmail");

  if (token && userEmail) {
    return {
      isAuthenticated: true,
      token,
      user: {
        email: userEmail,
        imageUrl: userImg || undefined,
      },
    };
  }
  return {
    isAuthenticated: false,
    user: null,
    token: null,
  };
};

const initialState: AuthState = loadStateFromStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ user: AuthState["user"]; token: string }>
    ) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("access_token", action.payload.token);
      localStorage.setItem("userEmail", action.payload.user?.email || "");
      if (action.payload.user?.imageUrl) {
        localStorage.setItem("userImg", action.payload.user.imageUrl);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userImg");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
