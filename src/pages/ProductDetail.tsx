import { Box } from "@mui/material";
import { useEffect } from "react";
import ProductHero from "../components/ProductHero";
import ProductDetails from "../components/ProductDetails";
import BestProducts from "../components/BestProducts";
import CompanyLogos from "../components/CompanyLogos";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh", p: 2 }}>
      <ProductHero />
      <ProductDetails />
      <BestProducts />
      <CompanyLogos />
    </Box>
  );
};

export default ProductDetail;
