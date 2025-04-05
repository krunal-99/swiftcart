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
} from "../utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const CardComponent: React.FC<ProductCardProps> = (props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();

  const { data: wishlist = [], isLoading: isWishlistLoading } = useQuery<
    Wishlist[]
  >({
    queryKey: ["wishlist", user?.id],
    queryFn: () => getWishListItems(user?.id as number),
  });

  const isInWishList: boolean = wishlist.some(
    (item) => item.productId === props.product.id
  );

  const addMutation = useMutation({
    mutationFn: ({
      userId,
      productId,
    }: {
      userId: number;
      productId: number;
    }) => addToWishlist(userId, productId),
    onSuccess: (newItem) => {
      queryClient.setQueryData<Wishlist[]>(
        ["wishlist", user?.id],
        (old = []) => [...old, newItem]
      );
    },
  });

  const removeMutation = useMutation<void, Error, number>({
    mutationFn: (wishlistId) => removeFromWishlist(wishlistId),
    onSuccess: () => {
      queryClient.setQueryData<Wishlist[]>(["wishlist", user?.id], (old = []) =>
        old.filter((item) => item.productId !== props.product.id)
      );
    },
  });

  const handleWishlistToggle = (): void => {
    if (user?.id || isInWishList) return;

    if (isInWishList) {
      const wishlistItem = wishlist.find(
        (item) => item.productId === props.product.id
      );
      if (wishlistItem?.id) {
        removeMutation.mutate(wishlistItem.id);
      }
    } else {
      addMutation.mutate({
        userId: user?.id!,
        productId: props.product.id,
      });
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
          disabled={
            addMutation.isLoading ||
            removeMutation.isLoading ||
            isWishlistLoading
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
          <>
            <Skeleton
              width="100%"
              height="430px"
              variant="rectangular"
              animation="wave"
              sx={{ borderRadius: "4px 4px 0 0" }}
            />
            <CardContent sx={{ textAlign: "center", mt: "25px" }}>
              <Skeleton
                width="80%"
                height={24}
                animation="wave"
                sx={{ margin: "auto" }}
              />
              <Skeleton
                width="60%"
                height={24}
                animation="wave"
                sx={{ my: "10px", marginX: "auto" }}
              />
              <Stack direction="row" spacing={1} justifyContent="center">
                <Skeleton width="40px" height={24} animation="wave" />
                <Skeleton width="40px" height={24} animation="wave" />
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                pt="10px"
              >
                <Skeleton
                  variant="circular"
                  width={30}
                  height={30}
                  animation="wave"
                />
                <Skeleton
                  variant="circular"
                  width={30}
                  height={30}
                  animation="wave"
                />
              </Stack>
            </CardContent>
          </>
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
          </>
        )}
      </NavLink>
    </Card>
  );
};

export default CardComponent;
