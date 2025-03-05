import { Box, Stack } from "@mui/material";
import ProductHero from "../components/ProductHero";
import ProductDetails from "../components/ProductDetails";
import BestProducts from "../components/BestProducts";
import image1 from "../assets/images/company1.png";
import image2 from "../assets/images/company2.png";
import image3 from "../assets/images/company3.png";
import image4 from "../assets/images/company4.png";
import image5 from "../assets/images/company5.png";
import image6 from "../assets/images/company6.png";

const companies = [image1, image2, image3, image4, image5, image6];
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
