import React from "react";
import { Box, Typography, Grid, Skeleton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBrands, setCategory } from "../store/productSlice";
import { CategoryItem } from "../themes/ComponentThemes";
import { getCategories } from "../utils/product";
import { useQuery } from "@tanstack/react-query";
import { ShopPath } from "../constants/constants";

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const handleCategoryClick = (category: number) => {
    dispatch(setCategory(category));
    dispatch(setBrands([]));
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isError) return <div>Error: {"Something went wrong"}</div>;

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
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "70%", margin: "auto", pt: 5 }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ height: 500 }}>
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          ) : data && data[1] ? (
            <NavLink to={ShopPath}>
              <CategoryItem onClick={() => handleCategoryClick(data[1].id)}>
                <img src={data[1].imageUrl} alt={data[1].label} />
                <span className="label">{data[1].label}</span>
              </CategoryItem>
            </NavLink>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: 500 }}>
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          ) : data && data[2] ? (
            <NavLink to={ShopPath}>
              <CategoryItem onClick={() => handleCategoryClick(data[2].id)}>
                <img src={data[2].imageUrl} alt={data[2].label} />
                <span className="label">{data[2].label}</span>
              </CategoryItem>
            </NavLink>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item sx={{ height: 240 }}>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                />
              ) : data && data[3] ? (
                <NavLink to={ShopPath}>
                  <CategoryItem onClick={() => handleCategoryClick(data[3].id)}>
                    <img src={data[3].imageUrl} alt={data[3].label} />
                    <span className="label">{data[3].label}</span>
                  </CategoryItem>
                </NavLink>
              ) : null}
            </Grid>
            <Grid item sx={{ height: 240 }}>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                />
              ) : data && data[4] ? (
                <NavLink to={ShopPath}>
                  <CategoryItem onClick={() => handleCategoryClick(data[4].id)}>
                    <img src={data[4].imageUrl} alt={data[4].label} />
                    <span className="label">{data[4].label}</span>
                  </CategoryItem>
                </NavLink>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categories;
