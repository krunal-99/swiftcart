import ShopHeader from "../components/ShopHeader";
import CompanyLogos from "../components/CompanyLogos";
import { useEffect } from "react";
import ProductsListing from "../components/ProductsListing";
const Shop = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <ShopHeader />
      <ProductsListing />
      <CompanyLogos />
    </>
  );
};

export default Shop;
