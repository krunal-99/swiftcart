import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Slider,
  FormControlLabel,
  Divider,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FilterSidebarProps } from "../data/types";
import { categories } from "../data/data";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isMobile,
  onClose,
  products,
  selectedCategory,
  selectedBrands,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onPriceChange,
}) => {
  const getAvailableBrands = () => {
    const filteredProducts =
      selectedCategory === "All Categories"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    return Array.from(new Set(filteredProducts.map((p) => p.brand))).sort();
  };

  const getMaxPrice = () => {
    return Math.max(...products.map((p) => p.originalPrice));
  };

  const availableBrands = getAvailableBrands();
  const maxPrice = getMaxPrice();

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    onPriceChange(newValue as [number, number]);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newBrands);
  };

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : 250,
        p: 2,
        height: "100%",
        overflowY: "auto",
      }}
    >
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <ArrowBackIosIcon />
          <Typography variant="subtitle1">Back</Typography>
        </Box>
      )}

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Filter by
      </Typography>

      <List disablePadding>
        {categories.map((category) => (
          <ListItem
            key={category}
            disablePadding
            sx={{
              py: 0.5,
              color: selectedCategory === category ? "#23a6f0" : "inherit",
              cursor: "pointer",
            }}
            onClick={() => onCategoryChange(category)}
          >
            {category === "All Categories" && <ArrowBackIosIcon />}
            <ListItemText
              primary={category}
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "0.9rem",
                  fontWeight: selectedCategory === category ? "bold" : "normal",
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Price
      </Typography>

      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="off"
        min={0}
        max={maxPrice}
        sx={{
          width: "90%",
          mx: "auto",
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "2px solid #23a6f0",
            width: 16,
            height: 16,
          },
          "& .MuiSlider-track": {
            backgroundColor: "#23a6f0",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#E5E5E5",
          },
        }}
      />

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: 1, mb: 2 }}
      >
        <Typography variant="body2">₹ {priceRange[0]}</Typography>
        <Typography variant="body2">₹ {priceRange[1]}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Brands
      </Typography>

      <List disablePadding>
        {availableBrands.map((brand) => (
          <ListItem key={brand} disablePadding sx={{ py: 0.5 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  size="small"
                  sx={{
                    color: "#23a6f0",
                    "&.Mui-checked": {
                      color: "#23a6f0",
                    },
                  }}
                />
              }
              label={<Typography variant="body2">{brand}</Typography>}
              sx={{ width: "100%" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FilterSidebar;
