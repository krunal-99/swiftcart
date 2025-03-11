import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBrands, setCategory } from "../store/productSlice";
import { CategoryItem } from "../themes/ComponentThemes";
import { categoriesData } from "../data/data";

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
    dispatch(setBrands([]));
  };
  return (
    <Box sx={{ pt: 10, background: "#fafafa", textAlign: "center", pb: 15 }}>
      <Typography variant="h4" fontWeight={700} color="#252b42" gutterBottom>
        EDITOR'S PICK
      </Typography>
      <Typography
        variant="body1"
        color="#737373"
        sx={{ fontWeight: 700 }}
        mb={5}
      >
        Select the right category for you.
      </Typography>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "70%", margin: "auto", pt: 5 }}
      >
        <Grid2 columns={{ xs: 12, md: 6, sm: 4 }} sx={{ height: 500 }}>
          <NavLink to="/shop">
            <CategoryItem
              onClick={() => handleCategoryClick(categoriesData[0].category)}
            >
              <img
                src={categoriesData[0].image}
                alt={categoriesData[0].label}
              />
              <span className="label">{categoriesData[0].label}</span>
            </CategoryItem>
          </NavLink>
        </Grid2>
        <Grid2 columns={{ xs: 12, md: 6, sm: 4 }} sx={{ height: 500 }}>
          <NavLink to="/shop">
            <CategoryItem
              onClick={() => handleCategoryClick(categoriesData[1].category)}
            >
              <img
                src={categoriesData[1].image}
                alt={categoriesData[1].label}
              />
              <span className="label">{categoriesData[1].label}</span>
            </CategoryItem>
          </NavLink>
        </Grid2>
        <Grid2 columns={{ xs: 12, md: 6, sm: 4 }}>
          <Grid2 container direction="column" spacing={2}>
            <Grid2 sx={{ height: 240 }}>
              <NavLink to="/shop">
                <CategoryItem
                  onClick={() =>
                    handleCategoryClick(categoriesData[2].category)
                  }
                >
                  <img
                    src={categoriesData[2].image}
                    alt={categoriesData[2].label}
                  />
                  <span className="label">{categoriesData[2].label}</span>
                </CategoryItem>
              </NavLink>
            </Grid2>
            <Grid2 sx={{ height: 240 }}>
              <NavLink to="/shop">
                <CategoryItem
                  onClick={() =>
                    handleCategoryClick(categoriesData[3].category)
                  }
                >
                  <img
                    src={categoriesData[3].image}
                    alt={categoriesData[3].label}
                  />
                  <span className="label">{categoriesData[3].label}</span>
                </CategoryItem>
              </NavLink>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Categories;
