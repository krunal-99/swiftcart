import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

interface CardProps {
  imageUrl: string;
}

const colors = ["#23a6f0", "#23856d", "#e77c40", "#252b42"];

const CardComponent: React.FC<CardProps> = (props) => {
  return (
    <Card sx={{ width: "300px", my: "50px" }}>
      <CardMedia
        sx={{ height: "430px", objectFit: "cover" }}
        image={props.imageUrl}
      ></CardMedia>
      <CardContent sx={{ textAlign: "center", mt: "25px" }}>
        <Typography
          variant="h6"
          color="#252b42"
          sx={{ fontWeight: 700, lineHeight: "24px" }}
        >
          Graphic Design
        </Typography>
        <Typography
          my="10px"
          color="#737373"
          sx={{
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.2px",
          }}
          variant="h6"
        >
          English Department
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", justifyContent: "center", fontWeight: 700 }}
        >
          <Typography color="#bdbdbd" variant="h6">
            $16.48
          </Typography>
          <Typography variant="h6" color="#23856d">
            $6.48
          </Typography>
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          pt="10px"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {colors.map((color) => (
            <Box
              width={20}
              alignSelf="center"
              height={20}
              borderRadius="50%"
              key={color}
              sx={{ backgroundColor: color }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
