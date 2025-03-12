import { Box, Stack } from "@mui/material";
import ProductHero from "../sections/ProductHero";
import ProductDetails from "../sections/ProductDetails";
import BestProducts from "../sections/BestProducts";
import { assets } from "../assets";

const companies = [
  `${assets.images.Company1Img}`,
  `${assets.images.Company2Img}`,
  `${assets.images.Company3Img}`,
  `${assets.images.Company4Img}`,
  `${assets.images.Company5Img}`,
  `${assets.images.Company6Img}`,
];
const ProductDetail = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh", p: 2 }}>
      <ProductHero />
      <ProductDetails />
      <BestProducts />
      <Stack
        direction="row"
        justifyContent="center"
        py="70px"
        display="flex"
        flexWrap="wrap"
        bgcolor="#fafafa"
      >
        {companies.map((company, idx) => (
          <Box
            component="img"
            key={idx}
            src={company}
            height={50}
            width={150}
            margin={{ xs: "30px", md: "20px" }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ProductDetail;
