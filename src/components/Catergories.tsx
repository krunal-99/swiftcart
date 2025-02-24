import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const categories = [
  { label: "MEN", image: "./src/assets/images/category1.jpeg" },
  { label: "WOMEN", image: "./src/assets/images/category2.jpeg" },
  { label: "ACCESSORIES", image: "./src/assets/images/category3.jpeg" },
  { label: "KIDS", image: "./src/assets/images/category4.jpeg" },
];

const CategoryItem = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "& .label": {
    position: "absolute",
    bottom: theme.spacing(6),
    left: theme.spacing(4),
    backgroundColor: "white",
    padding: theme.spacing(1.5, 4),
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#252b42",
  },
}));

const Categories: React.FC = () => {
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
          <CategoryItem>
            <img src={categories[0].image} alt={categories[0].label} />
            <span className="label">{categories[0].label}</span>
          </CategoryItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: 500 }}>
          <CategoryItem>
            <img src={categories[1].image} alt={categories[1].label} />
            <span className="label">{categories[1].label}</span>
          </CategoryItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item sx={{ height: 240 }}>
              <CategoryItem>
                <img src={categories[2].image} alt={categories[2].label} />
                <span className="label">{categories[2].label}</span>
              </CategoryItem>
            </Grid>
            <Grid item sx={{ height: 240 }}>
              <CategoryItem>
                <img src={categories[3].image} alt={categories[3].label} />
                <span className="label">{categories[3].label}</span>
              </CategoryItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categories;
