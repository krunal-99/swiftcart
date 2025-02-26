import { Box, Button, Stack, Typography } from "@mui/material";

const AboutHero = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-evenly"
      gap={4}
      px={3}
      py={5}
    >
      <Stack maxWidth="600px" textAlign={{ xs: "center", md: "left" }}>
        <Typography color="#252b42" variant="h6" fontWeight={700}>
          ABOUT COMPANY
        </Typography>
        <Typography
          variant="h2"
          py={{ xs: "10px", sm: "20px", md: "30px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          fontSize={{ xs: "32px", md: "58px" }}
        >
          ABOUT US
        </Typography>
        <Typography
          variant="body1"
          color="#737373"
          fontWeight={500}
          maxWidth="375px"
          mx={{ xs: "auto", md: "0" }}
          pb={{ xs: "10px", sm: "20px", md: "30px" }}
          fontSize={{ xs: "14px", md: "16px" }}
        >
          We know how large objects will act, but things on a small scale.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#23a6f0",
            padding: "12px 30px",
            fontWeight: 700,
            fontSize: "14px",
            width: { xs: "200px", md: "250px" },
            mx: { xs: "auto", md: "0" },
          }}
        >
          Get Quote Now
        </Button>
      </Stack>
      <Box
        component="img"
        src="./src/assets/images/about.svg"
        height="auto"
        width={{ xs: "100%", sm: "80%", md: "500px" }}
        maxWidth="600px"
      />
    </Box>
  );
};

export default AboutHero;
