import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Catergories from "./components/Catergories";
import Products from "./components/Products";
import AdvertisementSection from "./components/AdvertisementSection";
import SingleProductComponent from "./components/SingleProductComponent";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SocialBar />
      <Navbar />
      <HeroSection />
      <Catergories />
      <Products />
      <AdvertisementSection />
      <SingleProductComponent />
      <FeaturedPosts />
      <Footer />
    </>
  );
}

export default App;
