import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import { RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </>
  );
}

export default App;
