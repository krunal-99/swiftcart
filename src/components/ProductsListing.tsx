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
    id: 1,
    title: "Wool Blend Sweater",
    department: "English Department",
    originalPrice: 89.99,
    salePrice: 59.99,
    imageUrl:
      "https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 2,
    title: "Casual Denim Jacket",
    department: "English Department",
    originalPrice: 129.99,
    salePrice: 79.99,
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 3,
    title: "Slim Fit Chinos",
    department: "English Department",
    originalPrice: 69.99,
    salePrice: 49.99,
    imageUrl:
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 4,
    title: "Linen Button-Up Shirt",
    department: "English Department",
    originalPrice: 79.99,
    salePrice: 59.99,
    imageUrl:
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 5,
    title: "Casual Oxford Shirt",
    department: "English Department",
    originalPrice: 65.99,
    salePrice: 45.99,
    imageUrl:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 6,
    title: "Printed Summer Shirt",
    department: "English Department",
    originalPrice: 59.99,
    salePrice: 39.99,
    imageUrl:
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 7,
    title: "Slim Fit Blazer",
    department: "Formal Collection",
    originalPrice: 199.99,
    salePrice: 149.99,
    imageUrl:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 8,
    title: "Lightweight Puffer Vest",
    department: "Outdoor Collection",
    originalPrice: 89.99,
    salePrice: 69.99,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
  {
    id: 9,
    title: "Classic Denim Jeans",
    department: "Casual Collection",
    originalPrice: 79.99,
    salePrice: 59.99,
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    colors: ["#33A0FF", "#2DD06F", "#F52B70", "#FFC107"],
  },
];

function ProductsListing() {
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
}

export default ProductsListing;
