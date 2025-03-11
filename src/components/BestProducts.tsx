import { Box, Grid2, Typography } from "@mui/material";
import CardComponent from "../UI/CardComponent";
import { getRandomProducts } from "../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../main";

const BestProducts = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const bestProducts =
    products.length > 8 ? getRandomProducts(products, 8) : products;
  return (
    <Box width="88%" margin="auto" sx={{ mt: "100px" }}>
      <Typography
        textAlign="center"
        mb="50px"
        color="#252b42"
        fontWeight={700}
        variant="h5"
      >
        BEST PRODUCTS
      </Typography>
      <Grid2 container spacing={3} justifyContent="center" alignItems="center">
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
  );
};

export default BestProducts;
