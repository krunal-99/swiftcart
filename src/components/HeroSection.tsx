import { useSelector } from "react-redux";
import CarouselComponent from "../UI/CarouselComponent";
import { RootState } from "../main";
const HeroSection = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const data = [
    {
      id: 1,
      imageUrl: "./src/assets/images/bg1.jpg",
      collection: `${products[66].title}`,
      tagline: `${products[66].shortDescription}`,
      price: "",
      buttonText: "SHOP NOW",
      path: "/product/67",
    },
    {
      id: 2,
      imageUrl: "./src/assets/images/bg2.jpg",
      collection: `${products[15].title}`,
      tagline: `${products[15].shortDescription}`,
      price: "",
      buttonText: "SHOP NOW",
      path: "/product/16",
    },
  ];
  return <CarouselComponent carouselData={data} />;
};

export default HeroSection;
