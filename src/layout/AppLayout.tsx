import SocialBar from "../components/SocialBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <SocialBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
