import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const SingleProductComponent = () => {
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: { xs: 4, md: 6 },
        pb: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="./src/assets/images/care.png"
          alt="Care Section"
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "90%",
              md: "500px",
              lg: "600px",
              xl: "700px",
            },
            height: "auto",
          }}
        />
      </Box>
      <Stack
        spacing={2}
        sx={{
          textAlign: { xs: "center", md: "left" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "16px", fontWeight: 700, color: "#bdbdbd" }}
        >
          WINTER 2025
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "30px", sm: "36px", md: "40px" },
            fontWeight: 700,
            color: "#252b42",
            lineHeight: { xs: "40px", md: "50px" },
          }}
        >
          Part of the Neural Universe
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: 500,
            color: "#737373",
            maxWidth: "400px",
          }}
        >
          We know how large objects will act, but things on a small scale.
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            pt: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <NavLink to="/product">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2dc071",
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 700,
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "#28a961" },
              }}
            >
              BUY NOW
            </Button>
          </NavLink>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#2dc071",
              color: "#2dc071",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 700,
              px: 4,
              py: 1.5,
              "&:hover": { borderColor: "#28a961", color: "#28a961" },
            }}
          >
            READ MORE
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleProductComponent;
