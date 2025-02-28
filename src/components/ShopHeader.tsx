import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShopCarousel from "../UI/ShopCarousel";

const ShopHeader = () => {
  return (
    <Box bgcolor="#fafafa">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        pt="100px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="#252b42" fontWeight={700} variant="h5">
          Shop
        </Typography>
        <Stack direction="row" flexWrap="wrap" alignItems="center">
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
      <Container sx={{ display: "flex", gap: "15px", pt: "25px" }}>
        <ShopCarousel />
      </Container>
    </Box>
  );
};

export default ShopHeader;
