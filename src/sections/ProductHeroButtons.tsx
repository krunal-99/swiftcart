import { Avatar, Box, Button, ButtonGroup, Stack } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { addToCart, getCartItems, updateCartItem } from "../utils/cart";
import { CartItems, Product, Wishlist } from "../data/types";
import { useParams } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/utils";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  addToWishlist,
  getWishListItems,
  removeFromWishlist,
} from "../utils/wishlist";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { debounce } from "lodash";
import { useCallback, useMemo } from "react";

interface ProductHeroButtonsProps {
  product: Product;
  selectedColor: string;
}

const ProductHeroButtons: React.FC<ProductHeroButtonsProps> = ({
  product,
  selectedColor,
}) => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();

  const { data: cartData } = useQuery({
    queryKey: ["cart", user?.id],
    queryFn: getCartItems,
    enabled: !!user?.id,
  });

  const cartItem = cartData?.data[0]?.items.find(
    (item: CartItems) =>
      item.product.id === Number(id) && item.selected_color === selectedColor
  );

  const updateMutation = useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: number; quantity: number }) =>
      updateCartItem(itemId, quantity),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart", user!.id] });
      if (data.status === "success") {
        handleSuccess("Cart updated successfully.");
      } else {
        handleError(data.message || "Failed tp update cart");
      }
    },
  });

  const debouncedQuantityChange = useMemo(
    () =>
      debounce((itemId: number, newQuantity: number) => {
        if (newQuantity >= 0) {
          updateMutation.mutate({ itemId, quantity: newQuantity });
        }
      }, 200),
    [updateMutation]
  );

  useCallback(() => {
    return () => {
      debouncedQuantityChange.cancel();
    };
  }, [debouncedQuantityChange]);

  const addToCartMutation = useMutation({
    mutationFn: ({
      productId,
      quantity,
      selectedColor,
    }: {
      productId: number;
      quantity: number;
      selectedColor: string;
    }) => addToCart(productId, quantity, selectedColor),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", user?.id] });
    },
    onError: () => {
      handleError("Failed to add item to cart");
    },
  });

  const addWishlistMutation = useMutation({
    mutationFn: ({ productId }: { productId: number }) =>
      addToWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
      queryClient.invalidateQueries({ queryKey: ["productDetails", id] });
    },
  });

  const removeWishlistMutation = useMutation<void, Error, number>({
    mutationFn: (wishlistId) => removeFromWishlist(wishlistId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
      queryClient.invalidateQueries({ queryKey: ["productDetails", id] });
    },
  });

  const handleAddToCart = () => {
    if (!product || !user?.id) {
      handleError("Please login to add item to cart");
      return;
    }
    addToCartMutation.mutate({
      productId: product.id,
      quantity: 1,
      selectedColor,
    });
  };

  const handleWishlistToggle = async (): Promise<void> => {
    if (!isAuthenticated || !user?.id) {
      handleError("Please login to add item to wishlist");
      return;
    }
    if (product.isInWishlist) {
      const wishlistResponse = await getWishListItems();
      const wishlistItem = wishlistResponse.find(
        (item: Wishlist) => item.productId === product.id
      );
      if (wishlistItem?.id) {
        removeWishlistMutation.mutate(wishlistItem.id);
      }
    } else {
      addWishlistMutation.mutate({
        productId: product.id,
      });
    }
  };
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems={{ xs: "center", sm: "flex-start" }}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {cartItem ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button
              onClick={() =>
                debouncedQuantityChange(cartItem.id, cartItem.quantity - 1)
              }
              sx={{
                backgroundColor: "#252b42",
                color: "white",
                borderRadius: 0,
              }}
            >
              <RemoveIcon sx={{ width: "15px" }} />
            </Button>
            <Button sx={{ fontWeight: 600 }}>{cartItem.quantity}</Button>
            <Button
              onClick={() =>
                debouncedQuantityChange(cartItem.id, cartItem.quantity + 1)
              }
              sx={{
                backgroundColor: "#fafafa",
                color: "black",
                borderRadius: 0,
              }}
            >
              <AddIcon sx={{ width: "15px" }} />
            </Button>
          </ButtonGroup>
        </Box>
      ) : (
        <Button
          onClick={handleAddToCart}
          variant="contained"
          sx={{
            backgroundColor: "#23a6f0",
            fontWeight: 700,
            width: { xs: "100%", sm: "auto" },
          }}
          disabled={addToCartMutation.isLoading || !isAuthenticated}
          size="large"
        >
          Add To Cart
        </Button>
      )}
      <Stack direction="row" spacing={1}>
        <Button
          onClick={handleWishlistToggle}
          sx={{ p: 0 }}
          disableRipple
          disableFocusRipple
          disableElevation
        >
          <Avatar sx={{ border: "1px solid #e8e8e8", bgcolor: "white" }}>
            {product.isInWishlist ? (
              <FavoriteIcon sx={{ color: "#ff0000" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#252b42" }} />
            )}
          </Avatar>
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductHeroButtons;
