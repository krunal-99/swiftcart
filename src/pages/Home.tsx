import HeroSection from "../components/HeroSection";
import Catergories from "../components/Catergories";
import Products from "../components/Products";
import AdvertisementSection from "../components/AdvertisementSection";
import SingleProductComponent from "../components/SingleProductComponent";
import FeaturedPosts from "../components/FeaturedPosts";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Catergories />
      <Products />
      <AdvertisementSection />
      <SingleProductComponent />
      <FeaturedPosts />
    </>
  );
};

export default Home;
