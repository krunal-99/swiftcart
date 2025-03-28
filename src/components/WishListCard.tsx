import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { ListCardProps } from "../data/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { removeFromList } from "../store/wishListSlice";

const WishListCard: React.FC<ListCardProps> = (props) => {
  const wishlist = useSelector((state: RootState) => state.wishlist.list);
  const listItem = wishlist.find(
    (item) => item.id === Number(props.product.id)
  );
  const dispatch = useDispatch();
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
        onClick={() => dispatch(removeFromList(listItem))}
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
        <FavoriteIcon sx={{ color: "#ff0000" }} />
      </IconButton>
      <NavLink
        to={`/product/${props.product.id}`}
        style={{ listStyle: "none", textDecoration: "none" }}
      >
        <CardMedia
          sx={{ height: "430px", objectFit: "cover" }}
          image={props.product.imageUrl}
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

export default WishListCard;
