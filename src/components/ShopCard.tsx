import { Box, Skeleton, Typography } from "@mui/material";
import { ShopCardProps } from "../data/types";

const ShopCard: React.FC<ShopCardProps> = ({ data, onClick, isLoading }) => {
  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width="210px"
        height="220px"
        animation="wave"
        sx={{ mx: "auto" }}
      />
    );
  }
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        position: "relative",
        cursor: "pointer",
        width: "210px",
        height: "220px",
        objectFit: "cover",
        backgroundImage: `url(${data?.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        mx: "auto",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {data?.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default ShopCard;
