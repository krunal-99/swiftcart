import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Product, ProductCardProps } from "../data/types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../store/wishListSlice";
import { RootState } from "../main";

const CardComponent: React.FC<ProductCardProps> = (props) => {
  const wishlist = useSelector((state: RootState) => state.wishlist.list);
  const listItem = wishlist.find(
    (item) => item.id === Number(props.product.id)
  );
  const isInWishList = Boolean(listItem);
  const dispatch = useDispatch();
  const handleAddToList = (product: Product) => {
    const listData = {
      id: product.id,
      imageUrl: product.imageUrls?.[0],
      title: product.title,
      type: product.type,
      originalPrice: product.originalPrice,
      salePrice: product.salePrice,
      colors: product.colors,
      listQuantity: 1,
    };
    dispatch(addToList(listData));
  };
  return (
    <Card
      sx={{
        width: "300px",
        mt: "20px",
        mb: "40px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <IconButton
        onClick={() =>
          isInWishList
            ? dispatch(removeFromList(props.product))
            : handleAddToList(props.product)
        }
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
          zIndex: 1,
        }}
      >
        {isInWishList ? (
          <FavoriteIcon sx={{ color: "#ff0000" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "#252b42" }} />
        )}
      </IconButton>
      <NavLink
        to={`/product/${props.product.id}`}
        style={{ listStyle: "none", textDecoration: "none" }}
      >
        <CardMedia
          sx={{ height: "430px", objectFit: "cover" }}
          image={props.product?.imageUrls[0]}
        />
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
            {props.product?.type}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography color="#bdbdbd" variant="h6" fontWeight={700}>
              ₹{props.product?.originalPrice}
            </Typography>
            <Typography variant="h6" color="#23856d" fontWeight={700}>
              ₹{props.product?.salePrice}
            </Typography>
          </Stack>
          <Stack
            spacing={1}
            direction="row"
            pt="10px"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {props.product?.colors.map((color: string, index: number) => (
              <Box
                key={index}
                width={30}
                height={30}
                borderRadius="50%"
                sx={{
                  backgroundColor: color,
                  border: "2px solid transparent",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    transform: "scale(1.2)",
                    border: "2px solid #000",
                  },
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </NavLink>
    </Card>
  );
};

export default CardComponent;
