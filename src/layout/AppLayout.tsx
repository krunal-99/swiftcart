import SocialBar from "../components/SocialBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "./toast.css";
import ScrollToTop from "../UI/ScrollToTop";

const AppLayout = () => {
  return (
    <>
      <SocialBar />
      <ScrollToTop />
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
