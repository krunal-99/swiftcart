import { Box, Grid2, Typography } from "@mui/material";
import CardComponent from "../UI/CardComponent";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { Product } from "../data/types";

const getRandomProducts = (products: Product[], count: number) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const BestProducts = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const bestProducts =
    products.length > 8 ? getRandomProducts(products, 8) : products;
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
          {bestProducts.slice(0, 8).map((product, index) => (
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
