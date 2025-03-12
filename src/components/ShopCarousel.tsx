import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShopCard from "./ShopCard";
import { Box, Container, IconButton, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredProducts,
  setBrands,
  setCategory,
} from "../store/productSlice";
import { shopCardItems } from "../data/data";
import { shopCarouselResponsive } from "../data/data";

const ShopCarousel = () => {
  const filteredProducts = useSelector(selectFilteredProducts);
  useEffect(() => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  }, [filteredProducts]);

  const carouselRef = useRef<any>(null);
  const dispatch = useDispatch();

  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
    dispatch(setBrands([]));
  };

  return (
    <Box width="100%" padding="30px 0" position="relative">
      <IconButton
        onClick={() => carouselRef.current?.previous()}
        sx={{
          position: "absolute",
          left: { lg: "-40px", md: "-30px", sm: "-20px", xs: "-10px" },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          p: 0,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
            height: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            transition: "all 0.3s ease-in-out",
            "&:hover": { backgroundColor: "#ddd", transform: "scale(1.1)" },
          }}
        >
          <ArrowBackIosIcon
            sx={{ fontSize: { lg: "25px", sm: "18px", xs: "14px" } }}
          />
        </Paper>
      </IconButton>
      <Container maxWidth="lg">
        <Carousel
          swipeable
          draggable
          showDots={false}
          responsive={shopCarouselResponsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 0.5s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          ref={carouselRef}
          arrows={false}
        >
          {shopCardItems.map((item) => (
            <ShopCard
              key={item.id}
              data={item}
              onClick={() => handleCategoryClick(item.category)}
            />
          ))}
        </Carousel>
      </Container>
      <IconButton
        onClick={() => carouselRef.current?.next()}
        sx={{
          position: "absolute",
          right: { lg: "-40px", md: "-30px", sm: "-20px", xs: "-10px" },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          p: 0,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
            height: { lg: "55px", md: "45px", sm: "35px", xs: "30px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            transition: "all 0.3s ease-in-out",
            "&:hover": { backgroundColor: "#ddd", transform: "scale(1.1)" },
          }}
        >
          <ArrowForwardIosIcon
            sx={{ fontSize: { lg: "25px", sm: "18px", xs: "14px" } }}
          />
        </Paper>
      </IconButton>
    </Box>
  );
};

export default ShopCarousel;
