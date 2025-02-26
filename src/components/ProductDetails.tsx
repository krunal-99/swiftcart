import { Box, Grid2, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box py={{ xs: "20px", md: "35px" }} sx={{ backgroundColor: "white" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={{ xs: 2, sm: 4 }}
      >
        <Typography variant="body2" sx={{ color: "#737373", fontWeight: 600 }}>
          Description
        </Typography>
        <Typography variant="body2" sx={{ color: "#737373", fontWeight: 600 }}>
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
              exceptional experience. The sleek design combined with outstanding
              performance makes it a must-have for users who value excellence.
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
            <Typography pb="20px" color="#252b42" fontWeight={700} variant="h5">
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
            <Typography pb="20px" color="#252b42" fontWeight={700} variant="h5">
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
  );
};

export default ProductDetails;
