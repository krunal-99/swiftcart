import { Box, Button, Stack } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Product } from "../data/types";

interface ProductCarouselProps {
  product: Product;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Stack alignItems="center">
      <Carousel
        autoPlay
        selectedItem={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <Button
              onClick={clickHandler}
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "5px", sm: "10px", md: "20px" },
                zIndex: 2,
                color: "white",
                minWidth: "50px",
                height: "50px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowBackIosIcon
                sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
              />
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
                right: { xs: "5px", sm: "10px", md: "20px" },
                zIndex: 2,
                color: "white",
                minWidth: "50px",
                height: "50px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowForwardIosIcon
                sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
              />
            </Button>
          )
        }
      >
        {product?.imageUrls?.map((image: string, idx: number) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: { xs: "250px", sm: "350px", md: "450px" },
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`${product.title} - image ${idx + 1}`}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </Box>
        ))}
      </Carousel>
      <Stack
        ml={{ xs: 0, sm: "15px" }}
        mt="10px"
        direction="row"
        spacing={1}
        flexWrap="wrap"
        justifyContent="center"
      >
        {product.imageUrls?.map((image: string, idx: number) => (
          <Box
            onClick={() => setSelectedIndex(idx)}
            component="img"
            key={idx}
            src={image}
            width={80}
            height={60}
            sx={{
              objectFit: "cover",
              cursor: "pointer",
              border: selectedIndex === idx ? "2px solid #007bff" : "none",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductCarousel;
