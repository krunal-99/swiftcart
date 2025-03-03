import { Box, Container, Grid, Typography } from "@mui/material";
import CardComponent from "../UI/CardComponent";
import { products } from "../data/productData";

const Products = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h6" color="#737373">
          Featured Products
        </Typography>
        <Typography
          variant="h6"
          color="#252b42"
          sx={{
            py: 1,
            fontWeight: 700,
            fontSize: "24px",
            letterSpacing: "0.1px",
          }}
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography variant="body2" color="#737373" sx={{ fontWeight: 700 }}>
          Here are some of the top quality clothes recommended for you.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {products.slice(0, 8).map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <CardComponent key={index} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
