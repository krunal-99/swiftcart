import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { CarouselComponentProps, Product } from "../data/types";
import { addToCart } from "../store/cartSlice";
import { handleError } from "../utils/utils";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  carouselData,
}) => {
  const [isSwipeable, setIsSwipeable] = useState(true);
  const products = useSelector((state: RootState) => state?.products.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    if (!product) return;
    const cartData = {
      id: product.id,
      imageUrl: product.imageUrls[0],
      title: product.title,
      color: product.colors[0],
      price: product.salePrice,
      cartQuantity: 1,
    };
    dispatch(addToCart(cartData));
  };

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

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

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
      responsive={responsive}
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
            backgroundImage: `url(${item.imageUrl})`,
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
              {item.collection}
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
              {item.tagline}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              sx={{
                py: "25px",
                mx: { xs: "auto", md: "0" },
                alignItems: "center",
              }}
            >
              {item.price && (
                <Typography
                  variant="h5"
                  fontWeight={700}
                  fontSize={{ xs: "20px", sm: "22px", md: "24px" }}
                >
                  ₹ {item.price}
                </Typography>
              )}
              <NavLink to={item.path}>
                <Button
                  onClick={() => {
                    if (item.price !== "") {
                      isAuthenticated
                        ? handleAddToCart(products[item.id])
                        : handleError(
                            "Login is required to add product to cart"
                          );
                    }
                  }}
                  sx={{
                    backgroundColor: "#2dc071",
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
                  {item.buttonText}
                </Button>
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
