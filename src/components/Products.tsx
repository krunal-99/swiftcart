import { Box, Container, Grid, Typography } from "@mui/material";
import CardComponent from "../UI/CardComponent";

interface Product {
  id: number;
  title: string;
  department: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  colors: string[];
}
const products: Product[] = [
  {
    id: 10,
    title: "Striped Polo Shirt",
    department: "Summer Collection",
    originalPrice: 49.99,
    salePrice: 34.99,
    imageUrl:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 18,
    title: "Slim Fit Turtleneck",
    department: "Winter Collection",
    originalPrice: 59.99,
    salePrice: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 12,
    title: "Merino Wool Cardigan",
    department: "Winter Collection",
    originalPrice: 119.99,
    salePrice: 89.99,
    imageUrl:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 13,
    title: "Graphic Print T-Shirt",
    department: "Casual Collection",
    originalPrice: 39.99,
    salePrice: 24.99,
    imageUrl:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 14,
    title: "Slim Fit Dress Shirt",
    department: "Formal Collection",
    originalPrice: 79.99,
    salePrice: 59.99,
    imageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 15,
    title: "Lightweight Chino Shorts",
    department: "Summer Collection",
    originalPrice: 59.99,
    salePrice: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 16,
    title: "Hooded Sweatshirt",
    department: "Casual Collection",
    originalPrice: 69.99,
    salePrice: 49.99,
    imageUrl:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 17,
    title: "Quilted Jacket",
    department: "Winter Collection",
    originalPrice: 149.99,
    salePrice: 99.99,
    imageUrl:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
];

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
        {products.map((product, index) => (
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
