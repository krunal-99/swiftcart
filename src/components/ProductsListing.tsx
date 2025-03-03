import { useState } from "react";
import {
  Box,
  Drawer,
  Grid2,
  Pagination,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterSidebar from "./FilterSideBar";
import ShopHero from "./ShopHero";
import CardComponent from "../UI/CardComponent";
import { products } from "../data/productData";

const ProductsListing: React.FC = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const appTheme = useTheme();
  const isMobile = useMediaQuery(appTheme.breakpoints.down("md"));
  const [page, setPage] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleFilterToggle = () => {
    setMobileFilterOpen((prev) => !prev);
  };

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
        <Grid2
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {products.map((product, index) => (
            <Grid2
              columns={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <CardComponent key={index} product={product} />
            </Grid2>
          ))}
        </Grid2>
        <Box display="flex" justifyContent="center">
          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              padding: "15px",
              borderRadius: "12px",
            }}
          >
            <Pagination
              count={3}
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
      </Box>
    </Box>
  );
};

export default ProductsListing;
