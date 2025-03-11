import CarouselComponent from "../UI/CarouselComponent";
import { heroCarouselData } from "../data/data";

const HeroSection = () => {
  return <CarouselComponent carouselData={heroCarouselData} />;
};

export default HeroSection;
