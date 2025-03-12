import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ShopHeroProps, SortOption } from "../data/types";

const ShopHero: React.FC<ShopHeroProps> = ({
  title,
  subtitle,
  onFilterClick,
  sortBy,
  onSortChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value as SortOption);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        mb: 3,
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: { xs: 2, sm: 0 },
          width: { xs: "100%", sm: "auto" },
          flexDirection: { xs: "column", sm: "row" },
          gap: "25px",
        }}
      >
        {isMobile && (
          <Box
            component="button"
            onClick={onFilterClick}
            sx={{
              border: "1px solid #d1d1d1",
              borderRadius: "12px",
              width: { xs: "100%", sm: 200 },
              backgroundColor: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
              },
              "&:focus": {
                outline: "2px solid #737373",
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              padding="10px"
            >
              <Typography color="black" fontWeight={700} fontSize="16px">
                Filters
              </Typography>
              <FilterAltIcon sx={{ color: "#737373", fontSize: "22px" }} />
            </Stack>
          </Box>
        )}
        <FormControl
          size="small"
          sx={{
            width: { xs: "100%", sm: 200 },
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            "& .MuiInputLabel-root": {
              color: "#000000",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#dddddd",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#dddddd",
              },
            },
          }}
        >
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            label="Sort by"
            onChange={handleChange}
            sx={{
              borderRadius: "8px",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#f1f8f8",
              },
              "& .MuiSelect-icon": {
                color: "#737373",
              },
            }}
          >
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="name-asc">Name: A to Z</MenuItem>
            <MenuItem value="name-desc">Name: Z to A</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ShopHero;
