import SocialBar from "../sections/SocialBar";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "./toast.css";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
const AppLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <SocialBar />
      <Analytics />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="custom-toast"
      />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
