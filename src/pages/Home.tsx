import HeroSection from "../components/HeroSection";
import Catergories from "../components/Catergories";
import Products from "../components/Products";
import AdvertisementSection from "../components/AdvertisementSection";
import SingleProductComponent from "../components/SingleProductComponent";
import FeaturedPosts from "../components/FeaturedPosts";

const Home = () => {
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
