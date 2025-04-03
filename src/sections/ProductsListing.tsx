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
import { useLocation } from "react-router-dom";
import { Product, SortOption } from "../data/types";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getFilteredProducts } from "../utils/utils";
import { Categories } from "../data/types";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setCategory } from "../store/productSlice";

const ProductsListing: React.FC = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [sortBy, setSortBy] = useState<SortOption>("popularity");

  const selectedCategory = useSelector(selectCategory);
  const dispatch = useDispatch();
  const appTheme = useTheme();
  const isMobile = useMediaQuery(appTheme.breakpoints.down("md"));
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";
  const productSectionRef = useRef<HTMLDivElement>(null);

  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: [
      "products",
      pageNumber,
      searchTerm,
      selectedCategory,
      selectedBrands,
      priceRange,
      sortBy,
    ],
    queryFn: () =>
      getFilteredProducts({
        page: pageNumber,
        search: searchTerm,
        category: selectedCategory,
        brands: selectedBrands,
        priceRange,
        sortBy,
      }),
  });

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const products = productsData?.products || [];
  const totalProducts = productsData?.total || "";
  const categoryName =
    categories && selectedCategory > 0 && categories.length > selectedCategory
      ? categories[
          selectedCategory === 1
            ? 0
            : categories.findIndex((c: Categories) => c.id === selectedCategory)
        ].name
      : "Hand Bags";

  const handleFilterToggle = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNumber(value);
  };

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
    setPageNumber(1);
  };

  const handlePriceChange = (priceRange: [number, number]) => {
    setPriceRange(priceRange);
    setPageNumber(1);
  };

  const handleSortChange = (sortBy: SortOption) => {
    setSortBy(sortBy);
    setPageNumber(1);
  };

  useEffect(() => {
    if (searchTerm && productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);

  useEffect(() => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  }, [pageNumber, categoryName]);
  if (categoriesError) return <Typography>Error loading categories</Typography>;
  if (productsError) return <Typography>Error loading products</Typography>;
  return (
    <Box
      width="80%"
      py="30px"
      margin="auto"
      sx={{ display: "flex" }}
      ref={productSectionRef}
    >
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
            categories={categories || []}
            isLoading={categoriesLoading}
            selectedCategory={selectedCategory}
            selectedBrands={selectedBrands}
            priceRange={priceRange}
            onCategoryChange={(category) => dispatch(setCategory(category))}
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
          categories={categories || []}
          isLoading={categoriesLoading}
          selectedCategory={selectedCategory}
          selectedBrands={selectedBrands}
          priceRange={priceRange}
          onCategoryChange={(category) => dispatch(setCategory(category))}
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
          title={categoryName}
          subtitle={`${totalProducts} products available`}
          onFilterClick={handleFilterToggle}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />

        <Grid2
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {productsLoading ? (
            Array.from(new Array(9)).map((_, index) => (
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
          ) : products.length > 0 ? (
            products.map((product: Product) => (
              <Grid2
                columns={{ xs: 12, md: 6, sm: 4 }}
                key={product.id}
                display="flex"
                justifyContent="center"
              >
                <CardComponent isLoading={false} product={product} />
              </Grid2>
            ))
          ) : (
            <Box py={5} textAlign="center" width="100%">
              <Typography variant="h5">
                No products found matching your criteria
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={2}>
                Try adjusting your filters or search term
              </Typography>
            </Box>
          )}
        </Grid2>
        {totalProducts > 0 && (
          <Box display="flex" justifyContent="center" mt={3}>
            <Stack spacing={2} alignItems="center">
              <Pagination
                count={Math.ceil(totalProducts / 9)}
                page={pageNumber}
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
