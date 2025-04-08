import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CartItems, Product, Wishlist } from "../data/types";
import { useEffect, useState } from "react";
import NoProductFound from "./NoProductFound";
import {
  addToWishlist,
  getProductById,
  getWishListItems,
  handleError,
  removeFromWishlist,
} from "../utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductSkeleton } from "./ProductSkeleton";
import { addToCart, getCartItems, updateCartItem } from "../utils/cart";

const ProductHero = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");

  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const queryClient = useQueryClient();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product, Error>({
    queryKey: ["productDetails", id],
    queryFn: () => getProductById(Number(id)),
    enabled: !!id && !isNaN(Number(id)),
  });

  const { data: cartData } = useQuery({
    queryKey: ["cart", user?.id],
    queryFn: () =>
      user?.id ? getCartItems(user.id) : Promise.reject("User ID is required"),
    enabled: !!user?.id,
  });

  useEffect(() => {
    if (product?.colors?.length) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const cartItem = cartData?.data[0]?.items.find(
    (item: CartItems) =>
      item.product.id === Number(id) && item.selectedColor === selectedColor
  );

  const addToCartMutation = useMutation({
    mutationFn: ({
      userId,
      productId,
      quantity,
      selectedColor,
    }: {
      userId: number;
      productId: number;
      quantity: number;
      selectedColor: string;
    }) => addToCart(userId, productId, quantity, selectedColor),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", user?.id] });
    },
    onError: (error) => {
      handleError("Failed to add item to cart");
      console.error(error);
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: number; quantity: number }) =>
      updateCartItem(itemId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", user?.id] });
    },
    onError: (error) => {
      handleError("Failed to update cart quantity");
      console.error(error);
    },
  });

  const handleAddToCart = () => {
    if (!product || !user?.id) {
      handleError("Please login to add item to cart");
      return;
    }
    addToCartMutation.mutate({
      userId: user.id,
      productId: product.id,
      quantity: 1,
      selectedColor,
    });
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantityMutation.mutate({ itemId, quantity: newQuantity });
    }
  };

  const { data: wishlist = [] } = useQuery<Wishlist[]>({
    queryKey: ["wishlist", user?.id],
    queryFn: () => getWishListItems(user?.id as number),
    enabled: !!user?.id,
  });

  const isInWishlist: boolean = wishlist.some(
    (item) => item?.productId === product?.id
  );

  const addWishlistMutation = useMutation({
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

  const removeWishlistMutation = useMutation<void, Error, number>({
    mutationFn: (wishlistId) => removeFromWishlist(wishlistId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
    },
  });

  const handleWishlistToggle = (): void => {
    if (isInWishlist) {
      const wishlistItem = wishlist.find(
        (item) => item.productId === product?.id
      );
      if (wishlistItem?.id) {
        removeWishlistMutation.mutate(wishlistItem.id);
      }
    } else {
      if (!user?.id) {
        handleError("Please login to add item to wishlist");
      } else {
        addWishlistMutation.mutate({
          userId: user?.id!,
          productId: product?.id!,
        });
      }
    }
  };

  if (isLoading) return <ProductSkeleton />;
  if (isError || !product) return <NoProductFound />;
  return (
    <>
      <Box pt={8} width={{ xs: "100%", sm: "90%", md: "72%" }} margin="auto">
        <Stack py="30px" direction="row" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" color="#252b42" fontWeight={700}>
            Home
          </Typography>
          <IconButton>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </IconButton>
          <Typography color="#bdbdbd" variant="body2" fontWeight={600}>
            Shop
          </Typography>
        </Stack>
      </Box>
      <Container sx={{ pb: "50px" }}>
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <Stack alignItems="center">
            <Carousel
              autoPlay
              selectedItem={selectedIndex}
              onChange={(index) => setSelectedIndex(index)}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={(clickHandler, hasPrev) =>
                hasPrev && (
                  <Button
                    onClick={clickHandler}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: { xs: "5px", sm: "10px", md: "20px" },
                      zIndex: 2,
                      color: "white",
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                      },
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
                    />
                  </Button>
                )
              }
              renderArrowNext={(clickHandler, hasNext) =>
                hasNext && (
                  <Button
                    onClick={clickHandler}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: { xs: "5px", sm: "10px", md: "20px" },
                      zIndex: 2,
                      color: "white",
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                      },
                    }}
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
                    />
                  </Button>
                )
              }
            >
              {product?.imageUrls?.map((image: string, idx: number) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: { xs: "250px", sm: "350px", md: "450px" },
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`${product.title} - image ${idx + 1}`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              ))}
            </Carousel>
            <Stack
              ml={{ xs: 0, sm: "15px" }}
              mt="10px"
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
            >
              {product.imageUrls?.map((image: string, idx: number) => (
                <Box
                  onClick={() => setSelectedIndex(idx)}
                  component="img"
                  key={idx}
                  src={image}
                  width={80}
                  height={60}
                  sx={{
                    objectFit: "cover",
                    cursor: "pointer",
                    border:
                      selectedIndex === idx ? "2px solid #007bff" : "none",
                  }}
                />
              ))}
            </Stack>
          </Stack>
          <Stack
            spacing={2}
            px={{ xs: 2, sm: 0 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography color="#252b42" variant="h6" fontWeight={600}>
              {product.title}
            </Typography>
            <Stack
              direction="row"
              py="15px"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={1}
            >
              <Rating
                name="size-large"
                max={5}
                readOnly
                value={product.rating / 2}
                precision={0.5}
                size="large"
              />
              <Typography variant="body2" color="#737373" fontWeight={700}>
                {product.reviewCount} Reviews
              </Typography>
            </Stack>
            <Typography color="#252b42" variant="h5" fontWeight={700}>
              ₹ {product.salePrice}
            </Typography>
            <Typography
              color="#858585"
              fontWeight={500}
              pb="20px"
              textAlign={{ xs: "center", md: "left" }}
            >
              {product.detailDescription}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              pb="30px"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {product.colors?.map((color: string, index: number) => (
                <Box
                  component="button"
                  onClick={() => setSelectedColor(color)}
                  key={index}
                  width={30}
                  height={30}
                  borderRadius="50%"
                  sx={{
                    backgroundColor: color,
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    transform: selectedColor === color ? "scale(1.2)" : "",
                    border:
                      selectedColor === color
                        ? "2px solid #000"
                        : "2px solid transparent",
                  }}
                />
              ))}
            </Stack>
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
                  <ButtonGroup
                    variant="outlined"
                    aria-label="Basic button group"
                  >
                    <Button
                      onClick={() =>
                        handleQuantityChange(cartItem.id, cartItem.quantity - 1)
                      }
                      sx={{
                        backgroundColor: "#252b42",
                        color: "white",
                        borderRadius: 0,
                      }}
                      disabled={updateQuantityMutation.isLoading}
                    >
                      <RemoveIcon sx={{ width: "15px" }} />
                    </Button>
                    <Button sx={{ fontWeight: 600 }}>
                      {cartItem.quantity}
                    </Button>
                    <Button
                      onClick={() =>
                        handleQuantityChange(cartItem.id, cartItem.quantity + 1)
                      }
                      sx={{
                        backgroundColor: "#fafafa",
                        color: "black",
                        borderRadius: 0,
                      }}
                      disabled={updateQuantityMutation.isLoading}
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
                  <Avatar
                    sx={{ border: "1px solid #e8e8e8", bgcolor: "white" }}
                  >
                    {isInWishlist ? (
                      <FavoriteIcon sx={{ color: "#ff0000" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ color: "#252b42" }} />
                    )}
                  </Avatar>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default ProductHero;
