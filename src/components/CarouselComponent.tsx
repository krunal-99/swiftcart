import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CarouselComponentProps } from "../data/types";
import { carouselResponsive } from "../data/data";

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  carouselData = [],
}) => {
  const [isSwipeable, setIsSwipeable] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSwipeable(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("carouselData", carouselData);
  const CustomDot = ({ onClick, active }: any) => {
    return (
      <Box
        component="button"
        onClick={() => onClick()}
        sx={{
          width: "50px",
          height: "10px",
          margin: "0 4px",
          backgroundColor: active ? "white" : "rgba(255, 255, 255, 0.5)",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s",
          position: "relative",
          bottom: "20px",
          display: "inline-block",
        }}
      />
    );
  };

  return (
    <Carousel
      responsive={carouselResponsive}
      autoPlay
      infinite
      showDots
      arrows
      swipeable={isSwipeable}
      draggable={isSwipeable}
      customLeftArrow={
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "5px", sm: "10px", md: "20px" },
            zIndex: 2,
            color: "white",
            minWidth: "50px",
            height: "50px",
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
        </Button>
      }
      customRightArrow={
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "5px", sm: "10px", md: "20px" },
            zIndex: 2,
            color: "white",
            minWidth: "50px",
            height: "50px",
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
        </Button>
      }
      customDot={<CustomDot />}
    >
      {carouselData.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: "100%",
            height: "92vh",
            backgroundImage: `url(${item.imageUrls[3]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, sm: 4, md: 8 },
            mt: { xs: "65px", md: 0 },
          }}
        >
          <Stack
            sx={{
              color: "#ffffff",
              maxWidth: "600px",
              ml: { xs: 5, md: 10, lg: 15 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "28px", sm: "48px", md: "58px" },
                letterSpacing: "0.2px",
                py: "15px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                maxWidth: "400px",
                mx: { xs: "auto", md: "0" },
              }}
            >
              {item.shortDescription}
            </Typography>
            {item.salePrice && (
              <Typography
                variant="h5"
                fontWeight={700}
                fontSize={{ xs: "20px", sm: "22px", md: "24px" }}
                my="15px"
              >
                ₹ {item.salePrice}
              </Typography>
            )}
            <NavLink to={`product/${item.id}`}>
              <Button
                sx={{
                  backgroundColor: "#2dc071",
                  mt: "20px",
                  fontWeight: 700,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  boxShadow: "none",
                  width: { xs: "150px", sm: "170px", md: "200px" },
                  height: { xs: "40px", sm: "45px", md: "50px" },
                  "&:hover": {
                    backgroundColor: "#28a961",
                  },
                }}
                size="large"
                variant="contained"
              >
                SHOP NOW
              </Button>
            </NavLink>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
