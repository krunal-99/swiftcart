import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "#2A7CC7",
          width: { xs: "100%", md: "60%" },
          color: "white",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            padding: { xs: "150px 75px", md: "200px 100px 200px 200px" },
            textAlign: "flex-start",
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            WORK WITH US
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            letterSpacing="0.2px"
            my="25px"
          >
            Now Let's grow Yours
          </Typography>
          <Typography mb="25px" variant="body1">
            If you want something more unique and brand-oriented, let me know
            your eCommerce niche, and I can tailor it further!
          </Typography>
          <Button
            variant="outlined"
            sx={{ width: "200px", padding: "15px 40px" }}
            color="inherit"
            href="mailto:kp488680@gmail.com"
          >
            CONNECT NOW
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "40%",
          height: "auto",
          backgroundImage: "url('src/assets/images/contact.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: { xs: "none", md: "block" },
        }}
      />
    </Box>
  );
};

export default Contact;
