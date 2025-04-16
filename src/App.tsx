import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import { RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import Wishlist from "./pages/Wishlist";
import {
  AboutPath,
  CartPath,
  CheckOutPath,
  ContactPath,
  ErrorPath,
  HomePath,
  LoginPath,
  ProductPath,
  ProfilePath,
  RegisterPath,
  ShopPath,
  SuccessPath,
  WishlistPath,
} from "./constants/constants";
import PrivateRoute, { AuthRoute } from "./components/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { restoreUserSession } from "./store/authSlice";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";
import PaymentRouteGuard from "./components/PaymentRouteGuard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUserSession());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: HomePath,
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: HomePath,
          element: <Home />,
        },
        {
          path: ContactPath,
          element: <Contact />,
        },
        {
          path: RegisterPath,
          element: (
            <AuthRoute>
              <Register />
            </AuthRoute>
          ),
        },
        {
          path: LoginPath,
          element: (
            <AuthRoute>
              <Login />
            </AuthRoute>
          ),
        },
        {
          path: CartPath,
          element: (
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          ),
        },
        {
          path: AboutPath,
          element: <About />,
        },
        {
          path: ProductPath,
          element: <ProductDetail />,
        },
        { path: ShopPath, element: <Shop /> },
        {
          path: WishlistPath,
          element: (
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          ),
        },
        {
          path: ProfilePath,
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: CheckOutPath,
          element: (
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          ),
        },
        {
          path: ErrorPath,
          element: (
            <PaymentRouteGuard>
              <PaymentError />
            </PaymentRouteGuard>
          ),
        },
        {
          path: SuccessPath,
          element: (
            <PaymentRouteGuard>
              <PaymentSuccess />
            </PaymentRouteGuard>
          ),
        },
      ],
    },
  ]);
  const client = new QueryClient();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
