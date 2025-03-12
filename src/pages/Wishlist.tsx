import { Box, Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import WishListCard from "../components/WishListCard";

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.list);
  return (
    <Box width="88%" margin="auto" sx={{ mt: "100px" }}>
      <Box>
        <Typography
          textAlign="center"
          mb="50px"
          color="#252b42"
          fontWeight={700}
          variant="h5"
        >
          YOUR WISHLIST
        </Typography>
        <Grid2
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {wishlist.map((item, index) => (
            <Grid2
              columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <WishListCard key={index} product={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Wishlist;
