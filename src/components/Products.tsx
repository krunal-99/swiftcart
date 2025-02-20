import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const Products = () => {
  return (
    <Container>
      <Box sx={{ mt: "100px", textAlign: "center" }}>
        <Typography variant="h6" color="#737373">
          Featured Products
        </Typography>
        <Typography
          variant="h6"
          color="#252b42"
          sx={{
            py: "10px",
            fontWeight: 700,
            fontSize: "24px",
            letterSpacing: "0.1px",
          }}
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography variant="body2" color="#737373" sx={{ fontWeight: 700 }}>
          Here are some of the top quality clothes recommeded for you.
        </Typography>
      </Box>
      <Card sx={{ maxWidth: "240px" }}>
        <CardMedia
          sx={{ height: "430px" }}
          image="./src/assets/images/product1.jpeg"
        ></CardMedia>
        <CardContent sx={{ textAlign: "center", mt: "25px" }}>
          <Typography
            variant="h5"
            color="#252b42"
            sx={{ fontWeight: 700, lineHeight: "24px" }}
          >
            Graphic Design
          </Typography>
          <Typography my="10px">English Department</Typography>
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography>$16.48</Typography>
            <Typography>$6.48</Typography>
          </Stack>
          <Stack></Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Products;
