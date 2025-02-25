import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Stack, Typography } from "@mui/material";

interface CarouselComponentProps {
  carouselData: {
    id: number;
    imageUrl: string;
    season: string;
    collection: string;
    price: string;
    tagline: string;
    buttonText: string;
  }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = (props) => {
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
      renderIndicator={(clickHandler, isSelected, index) => (
        <Box
          component="button"
          key={index}
          onClick={clickHandler}
          sx={{
            width: "50px",
            height: "10px",
            margin: "0 4px",
            backgroundColor: isSelected ? "white" : "rgba(255, 255, 255, 0.5)",
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
      {props.carouselData.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, sm: 4, md: 8 },
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
              variant="body1"
              fontWeight={700}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                letterSpacing: "0.1px",
              }}
            >
              {item.season}
            </Typography>
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
              direction="row"
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
                  {item.price}
                </Typography>
              )}
              <Button
                sx={{
                  backgroundColor: "#2dc071",
                  fontWeight: 700,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  boxShadow: "none",
                  width: { xs: "140px", sm: "170px", md: "200px" },
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
            </Stack>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
