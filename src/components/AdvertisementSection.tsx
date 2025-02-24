import CarouselComponent from "../UI/CarouselComponent";

const data = [
  {
    id: 1,
    imageUrl: "./src/assets/images/adv1.png",
    season: "WINTER 2025",
    collection: "Vita Classic Product",
    tagline:
      "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    buttonText: "ADD TO CART",
  },
  {
    id: 2,
    imageUrl: "./src/assets/images/adv2.png",
    season: "SPRING 2025",
    collection: "ZARA COLLECTIONS",
    tagline: "Embrace a new and classic look for your next party.",
    price: "$16.48",
    buttonText: "ADD TO CART",
  },
];

const AdvertisementSection = () => {
  return <CarouselComponent carouselData={data} />;
};

export default AdvertisementSection;
