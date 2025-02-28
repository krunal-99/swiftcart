import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  department: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

const CardComponent: React.FC<ProductCardProps> = (props) => {
  return (
    <Card sx={{ width: "300px", mt: "20px", mb: "40px", cursor: "pointer" }}>
      <NavLink
        to="/product"
        style={{ listStyle: "none", textDecoration: "none" }}
      >
        <CardMedia
          sx={{ height: "430px", objectFit: "cover" }}
          image={props.product?.imageUrl}
        ></CardMedia>
        <CardContent sx={{ textAlign: "center", mt: "25px" }}>
          <Typography
            variant="body1"
            color="#252b42"
            sx={{ fontWeight: 700, lineHeight: "24px" }}
          >
            {props.product?.title}
          </Typography>
          <Typography
            my="10px"
            color="#737373"
            sx={{
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.2px",
            }}
            variant="body1"
          >
            {props.product?.department}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography color="#bdbdbd" variant="h6" fontWeight={700}>
              ${props.product?.originalPrice}
            </Typography>
            <Typography variant="h6" color="#23856d" fontWeight={700}>
              ${props.product?.salePrice}
            </Typography>
          </Stack>
          <Stack
            spacing={1}
            direction="row"
            pt="10px"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {props.product?.colors.map((color) => (
              <Box
                width={20}
                alignSelf="center"
                height={20}
                borderRadius="50%"
                key={color}
                sx={{ backgroundColor: color }}
              />
            ))}
          </Stack>
        </CardContent>
      </NavLink>
    </Card>
  );
};

export default CardComponent;
