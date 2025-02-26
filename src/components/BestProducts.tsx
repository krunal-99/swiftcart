import { Box, Grid2, Typography } from "@mui/material";
import CardComponent from "../UI/CardComponent";
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

const BestProducts = () => {
  return (
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
  );
};

export default BestProducts;
