import { useSelector } from "react-redux";
import CarouselComponent from "../UI/CarouselComponent";
import { RootState } from "../main";

const AdvertisementSection = () => {
  const products = useSelector((state: RootState) => state.products.items);

  const data = [
    {
      id: 45,
      imageUrl: "./src/assets/images/bg333.jpg",
      collection: `${products[45].title}`,
      tagline: `${products[45].shortDescription}`,
      price: `${products[45].salePrice}`,
      buttonText: "ADD TO CART",
      path: "/cart",
    },
    {
      id: 87,
      imageUrl: "./src/assets/images/bg444.webp",
      collection: `${products[87].title}`,
      tagline: `${products[87].shortDescription}`,
      price: `${products[87].salePrice}`,
      buttonText: "ADD TO CART",
      path: "/cart",
    },
  ];

  return <CarouselComponent carouselData={data} />;
};

export default AdvertisementSection;
