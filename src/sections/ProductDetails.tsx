import {
  Avatar,
  Box,
  Container,
  Grid2,
  Paper,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TabPanel } from "../components/TabPanel";
import AdditionalInfo from "./AdditionalInfo";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../data/types";
import { getProductById } from "../utils/utils";
import { ProductDetailsSkeleton } from "./ProductDetailsSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (isError) {
    return (
      <Container>
        <Typography color="error">
          Error loading product: {error.message}
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: "white", paddingTop: "20px" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            top: 0,
            bgcolor: "background.paper",
            zIndex: 1000,
            px: { xs: 1, sm: 2 },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            allowScrollButtonsMobile={isMobile ? true : false}
            centered={isMobile ? false : true}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiTab-root": {
                color: "#737373",
                fontWeight: 600,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                minWidth: { xs: "auto", sm: 120 },
                px: { xs: 2, sm: 3 },
                "&.Mui-selected": {
                  color: "#252b42",
                },
              },
            }}
          >
            <Tab label="Description" />
            <Tab label="Additional Information" />
            <Tab label={`Reviews (${product?.reviews.length ?? 0})`} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid2
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Grid2 columns={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={product?.imageUrls[0]}
                alt="Jeans"
                sx={{
                  width: { xs: "90%", md: "450px" },
                  height: { xs: "auto", md: "450px" },
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
            </Grid2>

            <Grid2 columns={{ xs: 12, md: 6 }}>
              <Box sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="#252b42"
                  fontWeight={700}
                  sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                >
                  Product Description
                </Typography>
                <Typography
                  variant="body1"
                  color="#737373"
                  sx={{
                    whiteSpace: "pre-wrap",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.8,
                    width: { xs: "90%", md: "500px" },
                  }}
                >
                  {product?.detailDescription}
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <Typography
              variant="h5"
              gutterBottom
              color="#252b42"
              fontWeight={700}
              sx={{
                mb: 4,
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Product Specifications
            </Typography>
            <AdditionalInfo info={product.additionalInformation} />
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Stack spacing={{ xs: 2, sm: 3 }}>
            {product?.reviews.map((review, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2 }}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  mb={2}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#23a6f0",
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                    }}
                  >
                    {review.username.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      color="#252b42"
                      sx={{ fontSize: { xs: "1rem", sm: "1.125rem" } }}
                    >
                      {review.username}
                    </Typography>
                    <Rating
                      value={review.rating / 2}
                      precision={0.5}
                      readOnly
                      sx={{
                        color: "#23a6f0 ",
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                      }}
                    />
                  </Box>
                </Stack>
                <Typography
                  variant="body1"
                  color="#737373"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: 1.8,
                  }}
                >
                  {review.comment}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default ProductDetails;
