import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Rating,
  Skeleton,
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
import { Product, Wishlist } from "../data/types";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
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

const ProductSkeleton = () => {
  return (
    <>
      <Box pt={8} width={{ xs: "100%", sm: "90%", md: "72%" }} margin="auto">
        <Stack py="30px" direction="row" alignItems="center" flexWrap="wrap">
          <Skeleton width={60} height={24} />
          <IconButton disabled>
            <ArrowForwardIosIcon sx={{ width: "15px", color: "#e0e0e0" }} />
          </IconButton>
          <Skeleton width={40} height={24} />
        </Stack>
      </Box>
      <Container sx={{ pb: "50px" }}>
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <Stack alignItems="center" width={{ xs: "100%", md: "50%" }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              sx={{
                borderRadius: "10px",
                height: { xs: 250, sm: 350, md: 450 },
              }}
            />
            <Stack
              mt="10px"
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
            >
              {[1, 2, 3, 4].map((idx) => (
                <Skeleton
                  key={idx}
                  variant="rectangular"
                  width={80}
                  height={60}
                />
              ))}
            </Stack>
          </Stack>
          <Stack
            spacing={2}
            px={{ xs: 2, sm: 0 }}
            width={{ xs: "100%", md: "50%" }}
          >
            <Skeleton variant="text" height={40} width="80%" />
            <Stack
              direction="row"
              py="15px"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={1}
            >
              <Skeleton variant="rectangular" width={150} height={30} />
              <Skeleton variant="text" width={80} height={24} />
            </Stack>
            <Skeleton variant="text" height={40} width={120} />
            <Skeleton variant="text" height={100} width="100%" />
            <Stack
              direction="row"
              spacing={2}
              pb="30px"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {[1, 2, 3].map((idx) => (
                <Skeleton key={idx} variant="circular" width={30} height={30} />
              ))}
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "center", sm: "flex-start" }}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Skeleton
                variant="rectangular"
                width={200}
                height={50}
                sx={{ borderRadius: "4px" }}
              />
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

const ProductHero = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");

  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<Product, Error>({
    queryKey: ["productDetails", id],
    queryFn: () => getProductById(Number(id)),
    enabled: !!id && !isNaN(Number(id)),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  const removeMutation = useMutation({
    mutationFn: (id: number) => removeFromWishlist(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
    },
  });

  useEffect(() => {
    if (isError) console.error("Query error:", error);
    if (product) console.log("Fetched product:", product);
  }, [product, isError, error]);

  useEffect(() => {
    if (product?.colors?.length) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const cartItem = cart.find(
    (item) => item.id === Number(id) && item.color === selectedColor
  );
  const isInCart = Boolean(cartItem);

  const handleAddToCart = (product: Product) => {
    if (!product) return;
    const cartData = {
      id: product.id,
      imageUrl: product.imageUrls[0],
      title: product.title,
      color: selectedColor || product.colors[0],
      price: product.salePrice,
      cartQuantity: 1,
    };
    dispatch(addToCart(cartData));
  };

  const handleRemoveFromCart = () => {
    if (cartItem) {
      dispatch(removeFromCart(cartItem));
    }
  };

  const queryClient = useQueryClient();

  const { data: wishlist } = useQuery({
    queryKey: ["wishlist", user?.id],
    queryFn: () =>
      user?.id
        ? getWishListItems(user.id)
        : handleError("User Id is not defined"),
    enabled: !!user?.id,
  });
  const isInWishlist =
    wishlist && wishlist.some((item: Wishlist) => item.id === product?.id);

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
              {isInCart ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  flexDirection={{ xs: "column", sm: "row" }}
                >
                  <Button
                    onClick={handleRemoveFromCart}
                    variant="contained"
                    color="error"
                    sx={{
                      fontWeight: 700,
                      width: { xs: "100%", sm: "auto" },
                    }}
                    size="large"
                  >
                    Remove from Cart
                  </Button>
                  <ButtonGroup
                    variant="outlined"
                    aria-label="Basic button group"
                  >
                    <Button
                      onClick={() => dispatch(decreaseQuantity(cartItem))}
                      sx={{
                        backgroundColor: "#252b42",
                        color: "white",
                        borderRadius: 0,
                      }}
                    >
                      <RemoveIcon sx={{ width: "15px" }} />
                    </Button>
                    <Button sx={{ fontWeight: 600 }}>
                      {cartItem?.cartQuantity}
                    </Button>
                    <Button
                      onClick={() => dispatch(addToCart(cartItem))}
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
                  onClick={() =>
                    isAuthenticated
                      ? handleAddToCart(product)
                      : handleError(
                          "Login is required for adding a product to cart"
                        )
                  }
                  variant="contained"
                  sx={{
                    backgroundColor: "#23a6f0",
                    fontWeight: 700,
                    width: { xs: "100%", sm: "auto" },
                  }}
                  size="large"
                >
                  Add To Cart
                </Button>
              )}
              <Stack direction="row" spacing={1}>
                <Button
                  onClick={() => {
                    if (user?.id) {
                      if (isInWishlist) {
                        removeMutation.mutate(product.id);
                      } else {
                        addMutation.mutate({
                          userId: user.id,
                          productId: product.id,
                        });
                      }
                    }
                  }}
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
