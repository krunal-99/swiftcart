import HeroSection from "../sections/HeroSection";
import Catergories from "../sections/Catergories";
import Products from "../sections/Products";
import AdvertisementSection from "../sections/AdvertisementSection";
import SingleProductComponent from "../sections/SingleProductComponent";
import FeaturedPosts from "../sections/FeaturedPosts";

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
