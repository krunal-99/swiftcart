import { Box, Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../main";
const SingleProductComponent = () => {
  const products = useSelector((state: RootState) => state.products.items);
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        mt: "75px",
        display: "grid",
        gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: { xs: 4, md: 0 },
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
          src={products[35].imageUrls[0]}
          alt="Care Section"
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "90%",
              md: "400px",
              lg: "500px",
              xl: "600px",
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
          variant="h3"
          sx={{
            fontSize: { xs: "30px", sm: "36px", md: "40px" },
            fontWeight: 700,
            color: "#252b42",
            lineHeight: { xs: "40px", md: "50px" },
          }}
        >
          {products[35].title}
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
          {products[35].shortDescription}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            pt: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <NavLink to="/product/36">
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
          <NavLink to="/product/36">
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
          </NavLink>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleProductComponent;
