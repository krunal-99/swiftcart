import { Box, Stack, Typography, Button } from "@mui/material";
interface HeroContentProps {
  bgImg: string;
  season: string;
  collection: string;
  tagline: string;
}
const HeroContent: React.FC<HeroContentProps> = ({
  bgImg,
  season,
  collection,
  tagline,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        px: { xs: 3, sm: 6, md: 12 },
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
          sx={{
            fontWeight: 700,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            letterSpacing: "0.1px",
          }}
        >
          {season}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "58px" },
            letterSpacing: "0.2px",
            paddingY: "20px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {collection}
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
          {tagline}
        </Typography>
        <Stack
          sx={{ width: "150px", paddingY: "30px", mx: { xs: "auto", md: "0" } }}
        >
          <Button
            sx={{
              backgroundColor: "#2dc071",
              borderRadius: 0,
              fontWeight: 700,
              fontSize: { xs: "14px", sm: "16px", md: "17px" },
              boxShadow: "none",
              width: "100%",
              "&:hover": {
                backgroundColor: "#28a961",
              },
            }}
            size="large"
            variant="contained"
          >
            SHOP NOW
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroContent;
