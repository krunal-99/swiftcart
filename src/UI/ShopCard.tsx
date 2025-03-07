import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

interface shopCardData {
  id: number;
  image: string;
  category: string;
}

interface ShopCardProps {
  data: shopCardData;
  onClick: () => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ data, onClick }) => {
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
        backgroundImage: `url(${data.image})`,
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
          {data.category}
        </Typography>
      </Box>
    </Box>
  );
};

export default ShopCard;
