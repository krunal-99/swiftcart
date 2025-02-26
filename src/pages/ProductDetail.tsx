import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Companies from "../components/Companies";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardComponent from "../UI/CardComponent";
import { useEffect } from "react";

const colors = ["#23a6f0", "#23856d", "#e77c40", "#252b42"];

const productImages = [
  "./src/assets/images/product9.svg",
  "./src/assets/images/product10.svg",
  "./src/assets/images/product11.svg",
  "./src/assets/images/product12.svg",
  "./src/assets/images/product13.svg",
  "./src/assets/images/product14.svg",
  "./src/assets/images/product15.svg",
  "./src/assets/images/product16.svg",
];

const ProductDetail = () => {
  const images = [
    "./src/assets/images/pro1.svg",
    "./src/assets/images/pro2.svg",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh", p: 2 }}>
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
          <Stack alignItems="center">
            <Carousel
              autoPlay
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
                      right: { xs: "5px", sm: "10px", md: "20px" },
                      zIndex: 2,
                      color: "white",
                      minWidth: "50px",
                      height: "50px",
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
                  </Button>
                )
              }
            >
              {images.map((image, idx) => (
                <Box
                  component="img"
                  key={idx}
                  src={image}
                  width={{ xs: "100%", sm: "510px" }}
                  height={{ xs: "auto", sm: "410px" }}
                  sx={{ objectFit: "cover" }}
                ></Box>
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
              {images.map((image, idx) => (
                <Box
                  component="img"
                  key={idx}
                  src={image}
                  width={80}
                  height={60}
                  sx={{ objectFit: "cover", cursor: "pointer" }}
                ></Box>
              ))}
            </Stack>
          </Stack>
          <Stack
            spacing={2}
            px={{ xs: 2, sm: 0 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography color="#252b42" variant="h6" fontWeight={600}>
              Floating Phone
            </Typography>
            <Stack
              direction="row"
              py="15px"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={1}
            >
              <Rating name="size-large" defaultValue={4} max={5} size="large" />
              <Typography variant="body2" color="#737373" fontWeight={700}>
                10 Reviews
              </Typography>
            </Stack>
            <Typography color="#252b42" variant="h5" fontWeight={700}>
              ₹ 1000
            </Typography>
            <Stack
              direction="row"
              pt="7px"
              pb="20px"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Typography color="#737373" fontWeight={600}>
                Availability :{" "}
              </Typography>
              <Typography color="#23a6f0" fontWeight={600}>
                In Stock
              </Typography>
            </Stack>
            <Typography
              color="#858585"
              fontWeight={500}
              pb="20px"
              textAlign={{ xs: "center", md: "left" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, nesciunt. Soluta odio aspernatur nostrum laboriosam
              possimus quas praesentium mollitia, voluptas velit facilis ipsum
              nesciunt autem quidem voluptatem alias, illo
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              pb="30px"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {colors.map((color) => (
                <Box
                  width={25}
                  height={25}
                  borderRadius="50%"
                  key={color}
                  sx={{ backgroundColor: color }}
                />
              ))}
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "center", sm: "flex-start" }}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#23a6f0",
                  fontWeight: 700,
                  width: { xs: "100%", sm: "auto" },
                }}
                size="large"
              >
                Select Options
              </Button>
              <Stack direction="row" spacing={1}>
                <Avatar
                  sx={{ backgroundColor: "white", border: "1px solid #e8e8e8" }}
                >
                  <FavoriteBorderIcon sx={{ color: "#252b42" }} />
                </Avatar>
                <Avatar sx={{ backgroundColor: "white" }}>
                  <ShoppingCartIcon sx={{ color: "#252b42" }} />
                </Avatar>
                <Avatar sx={{ backgroundColor: "white" }}>
                  <VisibilityIcon sx={{ color: "#252b42" }} />
                </Avatar>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Box py={{ xs: "20px", md: "35px" }} sx={{ backgroundColor: "white" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "center", alignItems: "center" }}
          spacing={{ xs: 2, sm: 4 }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#737373", fontWeight: 600 }}
          >
            Description
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#737373", fontWeight: 600 }}
          >
            Additional Information
          </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography
              variant="body2"
              sx={{ color: "#737373", fontWeight: 600 }}
            >
              Reviews
            </Typography>
            <Typography color="#23856d" fontWeight={600}>
              (0)
            </Typography>
          </Stack>
        </Stack>

        <Grid2
          container
          gap={{ xs: "20px", md: "35px" }}
          py={{ xs: "40px", md: "65px" }}
          width="100%"
          margin="auto"
          justifyContent="center"
        >
          <Grid2 columns={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
            <Box
              component="img"
              src="./src/assets/images/extraPro.svg"
              maxWidth="100%"
            />
          </Grid2>

          <Grid2 columns={{ xs: 12, sm: 6, md: 4 }}>
            <Stack maxWidth={330} margin="auto">
              <Typography color="#252b42" fontWeight={700} variant="h5">
                High-Quality Product Overview
              </Typography>
              <Typography
                py="20px"
                color="#737373"
                fontWeight={500}
                variant="body2"
              >
                Our premium product ensures top-notch quality and durability.
                Crafted with precision and high-end materials, it provides an
                exceptional experience. The sleek design combined with
                outstanding performance makes it a must-have for users who value
                excellence.
              </Typography>
              <Typography color="#737373" fontWeight={500} variant="body2">
                With customer satisfaction in mind, this product meets industry
                standards and offers seamless functionality. Designed for
                convenience and long-term use, it is an ideal choice for
                professionals and enthusiasts alike.
              </Typography>
            </Stack>
          </Grid2>

          <Grid2 columns={{ xs: 12, sm: 6, md: 4 }}>
            <Stack maxWidth={330} margin="auto">
              <Typography
                pb="20px"
                color="#252b42"
                fontWeight={700}
                variant="h5"
              >
                Key Features
              </Typography>
              <Typography color="#737373" fontWeight={500} variant="body2">
                - Premium build quality for long-lasting use
              </Typography>
              <Typography color="#737373" fontWeight={500} variant="body2">
                - Sleek and modern design
              </Typography>
              <Typography color="#737373" fontWeight={500} variant="body2">
                - High-performance and user-friendly interface
              </Typography>
            </Stack>
            <Stack maxWidth={330} margin="auto" mt={3}>
              <Typography
                pb="20px"
                color="#252b42"
                fontWeight={700}
                variant="h5"
              >
                Why Choose Us?
              </Typography>
              <Typography color="#737373" fontWeight={500} variant="body2">
                - Reliable customer support and satisfaction guarantee
              </Typography>
              <Typography color="#737373" fontWeight={500} variant="body2">
                - Competitive pricing with superior quality
              </Typography>
              <Typography color="#737373" fontWeight={500} variant="body2">
                - Trusted by thousands of happy customers
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
      <Box width="88%" margin="auto" sx={{ mt: "100px" }}>
        <Box>
          <Typography
            textAlign="center"
            mb="50px"
            color="#252b42"
            fontWeight={700}
            variant="h5"
          >
            BEST PRODUCTS
          </Typography>
          <Grid2
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {productImages.map((image, index) => (
              <Grid2
                columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <CardComponent key={index} imageUrl={image} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
      <Companies />
    </Box>
  );
};

export default ProductDetail;
