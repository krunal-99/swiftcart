import { Box, Grid2, Typography } from "@mui/material";
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
    id: 20,
    title: "Lightweight Raincoat",
    department: "Outdoor Collection",
    originalPrice: 129.99,
    salePrice: 89.99,
    imageUrl:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 21,
    title: "Knit Beanie Hat",
    department: "Winter Accessories",
    originalPrice: 29.99,
    salePrice: 19.99,
    imageUrl:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 19,
    title: "Cargo Pants",
    department: "Outdoor Collection",
    originalPrice: 79.99,
    salePrice: 59.99,
    imageUrl:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 23,
    title: "Patterned Socks Set",
    department: "Accessories",
    originalPrice: 24.99,
    salePrice: 16.99,
    imageUrl:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 24,
    title: "Leather Wallet",
    department: "Accessories",
    originalPrice: 59.99,
    salePrice: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 25,
    title: "Aviator Sunglasses",
    department: "Accessories",
    originalPrice: 129.99,
    salePrice: 89.99,
    imageUrl:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 26,
    title: "Plaid Flannel Shirt",
    department: "Casual Collection",
    originalPrice: 59.99,
    salePrice: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1589992896844-9b720813d1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 27,
    title: "Slim Fit Joggers",
    department: "Activewear",
    originalPrice: 69.99,
    salePrice: 49.99,
    imageUrl:
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
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
          {products.map((product, index) => (
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
