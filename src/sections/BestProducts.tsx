import { Box, Grid2, Typography } from "@mui/material";
import CardComponent from "../components/CardComponent";
import { getRandomProducts } from "../utils/product";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../data/types";

const BestProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randomProducts"],
    queryFn: getRandomProducts,
  });

  if (isError) return <div>Error: {"Something went wrong."}</div>;

  return (
    <Box width="88%" margin="auto" sx={{ mt: "100px" }}>
      <Typography
        textAlign="center"
        mb="50px"
        color="#252b42"
        fontWeight={700}
        variant="h5"
      >
        BEST PRODUCTS
      </Typography>
      <Grid2 container spacing={3} justifyContent="center" alignItems="center">
        {isLoading
          ? Array.from(new Array(8)).map((_, index) => (
              <Grid2
                columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <CardComponent
                  isLoading={true}
                  product={{ id: index } as Product}
                />
              </Grid2>
            ))
          : products?.slice(0, 8).map((data: Product, index: number) => (
              <Grid2
                columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <CardComponent isLoading={isLoading} product={data} />
              </Grid2>
            ))}
      </Grid2>
    </Box>
  );
};

export default BestProducts;
