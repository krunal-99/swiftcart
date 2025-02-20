import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";

const OverlayText = styled(Typography)(() => ({
  position: "absolute",
  backgroundColor: "white",
  fontWeight: 700,
  fontSize: "16px",
  padding: "12px 40px",
  color: "#252b42",
}));

const Catergories = () => {
  return (
    <Box sx={{ background: "#fafafa" }}>
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#252b42", mb: 1 }}
        >
          EDITOR'S PICK
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#737373", fontSize: "18px", fontWeight: 500 }}
        >
          Select the right category for you.
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ mx: "auto", mb: "50px" }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
          <img
            src="./src/assets/images/category1.jpeg"
            alt="MEN"
            style={{ width: "500px", height: "500px", objectFit: "cover" }}
          />
          <OverlayText sx={{ left: "30px", bottom: "50px" }}>MEN</OverlayText>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
          <img
            src="./src/assets/images/category2.jpeg"
            alt="WOMEN"
            style={{ width: "240px", height: "500px", objectFit: "cover" }}
          />
          <OverlayText sx={{ left: "20px", bottom: "25px" }}>WOMEN</OverlayText>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item sx={{ position: "relative" }}>
              <img
                src="./src/assets/images/category3.jpeg"
                alt="ACCESSORIES"
                style={{ width: "240px", height: "240px", objectFit: "cover" }}
              />
              <OverlayText sx={{ left: 3, bottom: 40 }}>
                ACCESSORIES
              </OverlayText>
            </Grid>
            <Grid item sx={{ position: "relative" }}>
              <img
                src="./src/assets/images/category4.jpeg"
                alt="KIDS"
                style={{ width: "240px", height: "240px", objectFit: "cover" }}
              />
              <OverlayText sx={{ left: 3, bottom: 30 }}>KIDS</OverlayText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Catergories;
