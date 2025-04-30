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
import { ProductCardProps, Wishlist } from "../data/types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import {
  addToWishlist,
  getWishListItems,
  removeFromWishlist,
} from "../utils/wishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { handleError } from "../utils/utils";
import CardComponentSkeleton from "../sections/CardComponentSkeleton";

const CardComponent: React.FC<ProductCardProps> = (props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();

  const { data: wishlist = [] } = useQuery<Wishlist[]>({
    queryKey: ["wishlist", user?.id],
    queryFn: () => getWishListItems(user?.id as number),
    enabled: !!user?.id,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });

  const isInWishList: boolean = wishlist.some((item) => {
    return item?.productId === props.product.id;
  });

  const addMutation = useMutation({
    mutationFn: ({
      userId,
      productId,
    }: {
      userId: number;
      productId: number;
    }) => addToWishlist(userId, productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
    },
  });

  const removeMutation = useMutation<void, Error, number>({
    mutationFn: (wishlistId) => removeFromWishlist(wishlistId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
    },
  });

  const handleWishlistToggle = (): void => {
    if (isInWishList) {
      const wishlistItem = wishlist.find(
        (item) => item.productId === props.product.id
      );
      if (wishlistItem?.id) {
        removeMutation.mutate(wishlistItem.id);
      }
    } else {
      if (!user?.id) {
        handleError("Please login to add item to wishlist");
      } else {
        addMutation.mutate({
          userId: user?.id!,
          productId: props.product.id,
        });
      }
    }
  };

  return (
    <Card
      sx={{
        width: "300px",
        mt: "20px",
        mb: "40px",
        cursor: "pointer",
        position: "relative",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {!props.isLoading && (
        <IconButton
          onClick={handleWishlistToggle}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            },
            zIndex: 1,
            transition: "all 0.2s ease-in-out",
          }}
        >
          {isInWishList ? (
            <FavoriteIcon sx={{ color: "#ff0000" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "#252b42" }} />
          )}
        </IconButton>
      )}

      <NavLink
        to={`/product/${props.product.id}`}
        style={{ listStyle: "none", textDecoration: "none" }}
      >
        {props.isLoading ? (
          <CardComponentSkeleton />
        ) : (
          <>
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
                  ₹{props.product?.original_price}
                </Typography>
                <Typography variant="h6" color="#23856d" fontWeight={700}>
                  ₹{props.product?.sale_price}
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
          </>
        )}
      </NavLink>
    </Card>
  );
};

export default CardComponent;
