import { Box, Typography } from "@mui/material";

interface shopCardData {
  id: number;
  image: string;
  heading: string;
  items: number;
}

const ShopCard: React.FC<{ data: shopCardData }> = ({ data }) => {
  return (
    <Box
      sx={{
        position: "relative",
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
          {data.heading}
        </Typography>
        <Typography variant="body2" py="10px">
          {data.items} Items
        </Typography>
      </Box>
    </Box>
  );
};

export default ShopCard;
