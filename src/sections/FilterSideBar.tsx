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
  Skeleton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FilterSidebarProps } from "../data/types";
import { getAvailableBrands, getMaxPrice } from "../utils/product";
import { useQuery } from "@tanstack/react-query";
import { Categories, Brand } from "../data/types";
import { useEffect, useState } from "react";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isMobile,
  onClose,
  categories,
  isLoading,
  selectedCategory,
  selectedBrands,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onPriceChange,
}) => {
  const [localMaxPrice, setLocalMaxPrice] = useState<number>(1000000);

  const { data: maxPriceData } = useQuery({
    queryKey: ["maxPrice"],
    queryFn: getMaxPrice,
    onSuccess: (data) => {
      setLocalMaxPrice(data || 100000);
    },
  });

  useEffect(() => {
    if (maxPriceData) {
      setLocalMaxPrice(maxPriceData);
    }
  }, [maxPriceData]);

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    onPriceChange(newValue as [number, number]);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newBrands);
  };

  const {
    data: brands,
    isLoading: brandsLoading,
    isError: brandsError,
  } = useQuery({
    queryKey: ["brands", selectedCategory],
    queryFn: () => getAvailableBrands(selectedCategory),
  });

  if (brandsError) return <div>Something went wrong loading brands.</div>;

  const skeletonItems = Array(9).fill(null);
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
        {isLoading
          ? skeletonItems.map((_, idx) => (
              <Skeleton
                sx={{ my: 2 }}
                variant="rectangular"
                key={idx}
                width="90%"
              />
            ))
          : categories &&
            categories.map((category: Categories) => (
              <ListItem
                key={category.id}
                disablePadding
                sx={{
                  py: 0.5,
                  color:
                    selectedCategory === category.id ? "#23a6f0" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => onCategoryChange(category.id)}
              >
                {category.name === "All Categories" && <ArrowBackIosIcon />}
                <ListItemText
                  primary={category.name}
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "0.9rem",
                      fontWeight:
                        selectedCategory === category.id ? "bold" : "normal",
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
        max={localMaxPrice}
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
        {brandsLoading
          ? skeletonItems.map((_, idx) => (
              <Skeleton
                sx={{ my: 2 }}
                variant="rectangular"
                key={idx}
                width="90%"
              />
            ))
          : brands &&
            brands.map((brand: Brand) => (
              <ListItem key={brand.id} disablePadding sx={{ py: 0.5 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedBrands.includes(brand.name)}
                      onChange={() => handleBrandToggle(brand.name)}
                      size="small"
                      sx={{
                        color: "#23a6f0",
                        "&.Mui-checked": {
                          color: "#23a6f0",
                        },
                      }}
                    />
                  }
                  label={<Typography variant="body2">{brand.name}</Typography>}
                  sx={{ width: "100%" }}
                />
              </ListItem>
            ))}
      </List>
    </Box>
  );
};

export default FilterSidebar;
