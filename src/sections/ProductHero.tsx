import {
  Box,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { Product } from "../data/types";
import { useEffect, useState } from "react";
import NoProductFound from "./NoProductFound";
import { getProductById } from "../utils/product";
import { useQuery } from "@tanstack/react-query";
import { ProductSkeleton } from "./ProductSkeleton";
import ProductCarousel from "./ProductCarousel";
import ProductHeroButtons from "./ProductHeroButtons";

const ProductHero = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState("");
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product, Error>({
    queryKey: ["productDetails", id],
    queryFn: () => getProductById(Number(id)),
    enabled: !!id && !isNaN(Number(id)),
  });

  useEffect(() => {
    if (product?.colors?.length) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (isLoading) return <ProductSkeleton />;
  if (isError || !product) return <NoProductFound />;
  return (
    <>
      <Box pt={8} width={{ xs: "100%", sm: "90%", md: "72%" }} margin="auto">
        <Stack py="30px" direction="row" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" color="#252b42" fontWeight={700}>
            Home
          </Typography>
          <IconButton>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </IconButton>
          <Typography color="#bdbdbd" variant="body2" fontWeight={600}>
            Shop
          </Typography>
        </Stack>
      </Box>
      <Container sx={{ pb: "50px" }}>
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <ProductCarousel product={product} />
          <Stack
            spacing={2}
            px={{ xs: 2, sm: 0 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography color="#252b42" variant="h6" fontWeight={600}>
              {product.title}
            </Typography>
            <Stack
              direction="row"
              py="15px"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={1}
            >
              <Rating
                name="size-large"
                max={5}
                readOnly
                value={product.rating / 2}
                precision={0.5}
                size="large"
              />
              <Typography variant="body2" color="#737373" fontWeight={700}>
                {product.review_count} Reviews
              </Typography>
            </Stack>
            <Typography color="#252b42" variant="h5" fontWeight={700}>
              ₹ {product.sale_price}
            </Typography>
            <Typography
              color="#858585"
              fontWeight={500}
              pb="20px"
              textAlign={{ xs: "center", md: "left" }}
            >
              {product.detail_description}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              pb="30px"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {product.colors?.map((color: string, index: number) => (
                <Box
                  component="button"
                  onClick={() => setSelectedColor(color)}
                  key={index}
                  width={30}
                  height={30}
                  borderRadius="50%"
                  sx={{
                    backgroundColor: color,
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    transform: selectedColor === color ? "scale(1.2)" : "",
                    border:
                      selectedColor === color
                        ? "2px solid #000"
                        : "2px solid transparent",
                  }}
                />
              ))}
            </Stack>
            <ProductHeroButtons
              product={product}
              selectedColor={selectedColor}
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default ProductHero;
