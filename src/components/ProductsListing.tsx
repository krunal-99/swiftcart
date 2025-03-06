import { useEffect, useRef, useState } from "react";
import {
  Box,
  Drawer,
  Grid2,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterSidebar from "./FilterSideBar";
import ShopHero from "./ShopHero";
import CardComponent from "../UI/CardComponent";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { useLocation } from "react-router-dom";

const ProductsListing: React.FC = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const appTheme = useTheme();
  const isMobile = useMediaQuery(appTheme.breakpoints.down("md"));
  const [page, setPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(9);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";
  const productSectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (searchTerm && productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);
  const handleFilterToggle = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  }, [page]);

  const products = useSelector((state: RootState) => state.products.items);

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      )
    : products;

  const totalProducts = filteredProducts.length;
  const lastProductIndex = page * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <Box width="80%" py="30px" margin="auto" sx={{ display: "flex" }}>
      {!isMobile && (
        <Box
          component="nav"
          sx={{
            width: 250,
            flexShrink: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <FilterSidebar isMobile={false} />
        </Box>
      )}
      <Drawer
        variant="temporary"
        open={mobileFilterOpen}
        onClose={handleFilterToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
        }}
      >
        <FilterSidebar isMobile={true} onClose={handleFilterToggle} />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - 250px)` },
          overflow: "auto",
        }}
      >
        <ShopHero
          title="Men's clothing"
          subtitle="Seo text will be here"
          onFilterClick={handleFilterToggle}
        />
        {currentProducts.length > 0 ? (
          <Grid2
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {currentProducts.map((product, index) => (
              <Grid2
                columns={{ xs: 12, md: 6, sm: 4 }}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <CardComponent key={index} product={product} />
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <Box
            textAlign="center"
            mt={5}
            p={3}
            borderRadius="12px"
            bgcolor="#f8f9fa"
          >
            <Typography variant="h5" color="error" fontWeight="bold">
              No Products Found
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Try searching with a different term.
            </Typography>
          </Box>
        )}
        {totalProducts > 0 && (
          <Box display="flex" justifyContent="center" mt={3}>
            <Stack spacing={2} alignItems="center">
              <Pagination
                count={Math.ceil(totalProducts / productsPerPage)}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                size="large"
                color="primary"
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontSize: "1rem",
                    fontWeight: "600",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    border: "1px solid #d1d1d1",
                    transition: "all 0.3s ease",
                  },
                  "& .MuiPaginationItem-page:hover": {
                    backgroundColor: "#f0f8ff",
                  },
                  "& .MuiPaginationItem-page.Mui-selected": {
                    background:
                      "linear-gradient(135deg, #2196F3 30%, #1976D2 100%)",
                    color: "white",
                    border: "none",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                  },
                  "& .MuiPaginationItem-page.Mui-selected:hover": {
                    background:
                      "linear-gradient(135deg, #1976D2 30%, #0D47A1 100%)",
                  },
                  "& .MuiPaginationItem-ellipsis": {
                    color: "#737373",
                    fontSize: "1.2rem",
                  },
                  "& .MuiPaginationItem-previous, & .MuiPaginationItem-next": {
                    color: "#2196F3",
                    fontWeight: "bold",
                  },
                  "& .MuiPaginationItem-previous.Mui-disabled, & .MuiPaginationItem-next.Mui-disabled":
                    {
                      color: "#bdbdbd",
                    },
                }}
              />
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductsListing;
