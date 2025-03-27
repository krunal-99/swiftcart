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
  ContactPath,
  HomePath,
  LoginPath,
  ProductPath,
  RegisterPath,
  ShopPath,
  WishlistPath,
} from "./constants/constants";
import { AuthRoute } from "./components/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

function App() {
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
          element: <Cart />,
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
        { path: WishlistPath, element: <Wishlist /> },
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
