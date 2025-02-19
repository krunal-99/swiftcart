import {
  Box,
  Button,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(./src/assets/images/hero.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        sx={{ color: "#ffffff", position: "absolute", top: "40%", left: "15%" }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, fontSize: "16px", letterSpacing: "0.1px" }}
        >
          WINTER 2025
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: "58px",
            letterSpacing: "0.2px",
            paddingY: "35px",
          }}
        >
          NEW COLLECTION
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, width: "300px", fontSize: "18px" }}
        >
          We know how large objects will act, but things on a small scale.
        </Typography>
        <Stack width={150} sx={{ paddingY: "35px" }}>
          <Button
            sx={{
              backgroundColor: "#2dc071",
              borderRadius: 0,
              fontWeight: 700,
              fontSize: "17px",
              boxShadow: "none",
            }}
            size="large"
            variant="contained"
          >
            SHOP NOW
          </Button>
        </Stack>
      </Stack>
      <Stack direction={"row"} color="white" sx={{ cursor: "pointer" }}>
        <Typography
          sx={{
            position: "absolute",
            top: "58%",
            left: "20px",
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
        </Typography>
        <Typography sx={{ position: "absolute", top: "58%", right: "20px" }}>
          <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
        </Typography>
      </Stack>
    </Box>
  );
};

export default HeroSection;
