import { Box, Grid2, Typography } from "@mui/material";
import CardComponent from "../UI/CardComponent";
import { products } from "../data/productData";

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
          {products.slice(0, 8).map((product, index) => (
            <Grid2
              columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <CardComponent key={index} product={product} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default BestProducts;
