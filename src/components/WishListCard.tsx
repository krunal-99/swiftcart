import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { ListCardProps, Wishlist } from "../data/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../utils/utils";
import { RootState } from "../main";
import { useSelector } from "react-redux";

const WishListCard: React.FC<ListCardProps> = (props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();

  const removeMutation = useMutation({
    mutationFn: (id: number) => removeFromWishlist(id),
    onSuccess: (data, id) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
    },
  });

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
      {props.item ? (
        <>
          <IconButton
            onClick={() => {
              if (props.item?.id) {
                removeMutation.mutate(props.item?.id);
              }
            }}
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
            to={`/product/${props.item?.productId}`}
            style={{ listStyle: "none", textDecoration: "none" }}
          >
            <CardMedia
              sx={{ height: "430px", objectFit: "cover" }}
              image={props.item.product?.imageUrls[0]}
            />
            <CardContent sx={{ textAlign: "center", mt: "25px" }}>
              <Typography
                variant="body1"
                color="#252b42"
                sx={{ fontWeight: 700, lineHeight: "24px" }}
              >
                {props.item.product?.title}
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
                {props.item.product?.type}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography color="#bdbdbd" variant="h6" fontWeight={700}>
                  ₹{props.item.product?.originalPrice}
                </Typography>
                <Typography variant="h6" color="#23856d" fontWeight={700}>
                  ₹{props.item.product?.salePrice}
                </Typography>
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                pt="10px"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {props.item.product?.colors.map(
                  (color: string, index: number) => (
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
                  )
                )}
              </Stack>
            </CardContent>
          </NavLink>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" height={430} />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ position: "absolute", top: 8, right: 8 }}
          />
          <CardContent sx={{ textAlign: "center", mt: "25px" }}>
            <Skeleton width="80%" height={24} sx={{ mx: "auto" }} />
            <Skeleton width="60%" height={24} sx={{ my: "10px", mx: "auto" }} />
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Skeleton width={50} height={30} />
              <Skeleton width={50} height={30} />
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              pt="10px"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {Array.from(new Array(3)).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="circular"
                  width={30}
                  height={30}
                />
              ))}
            </Stack>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default WishListCard;
