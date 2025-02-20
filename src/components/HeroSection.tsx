import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroContent from "./HeroContent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button } from "@mui/material";
const HeroSection = () => {
  const data = [
    {
      id: 1,
      imageUrl: "./src/assets/images/hero.jpeg",
      season: "WINTER 2025",
      collection: "NEW COLLECTIONS",
      tagline:
        "We know how large objects will act, but things on a small scale.",
    },
    {
      id: 2,
      imageUrl: "./src/assets/images/heroreborn2.png",
      season: "SPRING 2025",
      collection: "ZARA COLLECTIONS",
      tagline: "Embrace a new and classic look for your next party.",
    },
  ];
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && (
          <Button
            onClick={clickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: { xs: "10px", md: "20px" },
              zIndex: 2,
              color: "white",
              minWidth: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
          </Button>
        )
      }
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <Button
            onClick={clickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: { xs: "10px", md: "20px" },
              zIndex: 2,
              color: "white",
              minWidth: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
          </Button>
        )
      }
      renderIndicator={(clickHandler, isSelected, index) => (
        <Box
          component="button"
          key={index}
          onClick={clickHandler}
          sx={{
            width: "50px",
            height: "10px",
            margin: "0 3px",
            backgroundColor: isSelected
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 0.7)",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
            position: "relative",
            bottom: "20px",
            display: "inline-block",
          }}
        />
      )}
    >
      {data.map((item) => (
        <HeroContent
          key={item.id}
          bgImg={item.imageUrl}
          season={item.season}
          collection={item.collection}
          tagline={item.tagline}
        />
      ))}
    </Carousel>
  );
};

export default HeroSection;
