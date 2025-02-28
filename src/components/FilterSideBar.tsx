import React, { useState } from "react";
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

interface FilterSidebarProps {
  isMobile: boolean;
  onClose?: () => void;
}

const categories = [
  "All Categories",
  "All Men's clothing",
  "Women's clothing",
  "Footwear",
  "Watches",
  "Beauty",
  "Kids clothing",
  "Hand bags",
  "Jewellery",
];

const brands = [
  { name: "All", checked: true },
  { name: "Zara", checked: false },
  { name: "Levis", checked: false },
  { name: "Adidas", checked: false },
  { name: "Peter England", checked: false },
  { name: "Allen Solly", checked: false },
  { name: "Fabindia", checked: false },
];

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isMobile, onClose }) => {
  const [priceRange, setPriceRange] = useState<number[]>([12, 435]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Men's clothing");
  const [checkedBrands, setCheckedBrands] = useState(brands);

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBrandToggle = (index: number) => {
    const newCheckedBrands = [...checkedBrands];
    newCheckedBrands[index].checked = !newCheckedBrands[index].checked;
    setCheckedBrands(newCheckedBrands);
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
            onClick={() => handleCategoryClick(category)}
          >
            {category === "All Categories" && <ArrowBackIosIcon />}
            <ListItemText
              primary={category}
              slotProps={{
                primary: {
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
        max={500}
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
        <Typography variant="body2">${priceRange[0]}</Typography>
        <Typography variant="body2">${priceRange[1]}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Brands
      </Typography>

      <List disablePadding>
        {checkedBrands.map((brand, index) => (
          <ListItem key={brand.name} disablePadding sx={{ py: 0.5 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={brand.checked}
                  onChange={() => handleBrandToggle(index)}
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
