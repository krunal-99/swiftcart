import CarouselComponent from "../UI/CarouselComponent";
const HeroSection = () => {
  const data = [
    {
      id: 1,
      imageUrl: "./src/assets/images/hero.jpeg",
      season: "WINTER 2025",
      collection: "NEW COLLECTIONS",
      tagline:
        "We know how large objects will act, but things on a small scale.",
      price: "",
      buttonText: "SHOP NOW",
    },
    {
      id: 2,
      imageUrl: "./src/assets/images/heroreborn2.png",
      season: "SPRING 2025",
      collection: "NEW ARRIVALS",
      tagline: "Fresh looks for a fresh season.",
      price: "",
      buttonText: "SHOP NOW",
    },
  ];
  return <CarouselComponent carouselData={data} />;
};

export default HeroSection;
