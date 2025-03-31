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
import CardComponent from "../components/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Product, SortOption } from "../data/types";
import {
  selectFilteredProducts,
  selectFilters,
  setCategory,
  setBrands,
  setPriceRange,
  setSortBy,
  selectAllProducts,
} from "../store/productSlice";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../utils/utils";

const ProductsListing: React.FC = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const filters = useSelector(selectFilters);
  // const products = useSelector(selectAllProducts);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const appTheme = useTheme();
  const isMobile = useMediaQuery(appTheme.breakpoints.down("md"));
  const [page, setPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(9);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";
  const productSectionRef = useRef<HTMLDivElement>(null);

  const totalProducts = filteredProducts.length;
  const lastProductIndex = page * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  const handleFilterToggle = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleCategoryChange = (category: string) => {
    dispatch(setCategory(category));
    setPage(1);
    isMobile ? handleFilterToggle() : "";
  };

  const handleBrandChange = (brands: string[]) => {
    dispatch(setBrands(brands));
    setPage(1);
  };

  const handlePriceChange = (priceRange: [number, number]) => {
    dispatch(setPriceRange(priceRange));
    setPage(1);
  };

  const handleSortChange = (sortBy: SortOption) => {
    dispatch(setSortBy(sortBy));
    setPage(1);
  };

  useEffect(() => {
    if (searchTerm && productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);

  useEffect(() => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  }, [page]);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  console.log("Backend products", products);

  if (isError) return <div>Error fetching products</div>;
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
          <FilterSidebar
            isMobile={false}
            products={products}
            selectedCategory={filters.category}
            selectedBrands={filters.brands}
            priceRange={filters.priceRange}
            onCategoryChange={handleCategoryChange}
            onBrandChange={handleBrandChange}
            onPriceChange={handlePriceChange}
          />
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
        <FilterSidebar
          isMobile={true}
          onClose={handleFilterToggle}
          products={products}
          selectedCategory={filters.category}
          selectedBrands={filters.brands}
          priceRange={filters.priceRange}
          onCategoryChange={handleCategoryChange}
          onBrandChange={handleBrandChange}
          onPriceChange={handlePriceChange}
        />
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
          title={filters.category}
          subtitle={`${totalProducts} products available`}
          onFilterClick={handleFilterToggle}
          sortBy={filters.sortBy}
          onSortChange={handleSortChange}
        />

        <Grid2
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {isLoading
            ? Array.from(new Array(9)).map((_, index) => (
                <Grid2
                  columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  key={index}
                  display="flex"
                  justifyContent="center"
                >
                  <CardComponent
                    isLoading={true}
                    product={{ id: index } as Product}
                  />
                </Grid2>
              ))
            : products.map((product: Product) => (
                <Grid2
                  columns={{ xs: 12, md: 6, sm: 4 }}
                  key={product.id}
                  display="flex"
                  justifyContent="center"
                >
                  <CardComponent isLoading={false} product={product} />
                </Grid2>
              ))}
        </Grid2>
        {totalProducts > 0 && (
          <Box display="flex" justifyContent="center" mt={3}>
            <Stack spacing={2} alignItems="center">
              <Pagination
                count={Math.ceil(totalProducts / productsPerPage)}
                page={page}
                onChange={handlePageChange}
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
