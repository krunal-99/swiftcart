import { Box, Container, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NoProductFound = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        marginTop: "55px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 4,
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <SentimentVeryDissatisfiedIcon
          sx={{
            fontSize: 80,
            color: "#e74c3c",
            animation: "shake 1.5s infinite",
          }}
        />
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: "#252b42",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Oops! Product Not Found
        </Typography>
        <Typography variant="body1" color="#555">
          The product you're looking for doesn't exist or has been removed.
        </Typography>
      </Box>
    </Container>
  );
};

export default NoProductFound;
