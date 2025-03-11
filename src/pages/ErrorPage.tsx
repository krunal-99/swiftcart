import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: 2,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        variant={isMobile ? "h2" : "h1"}
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#1a237e",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          mt: 2,
        }}
      >
        404
      </Typography>
      <Typography
        variant={isMobile ? "h4" : "h3"}
        component="h2"
        sx={{
          mb: 2,
          color: "#283593",
          fontWeight: "medium",
        }}
      >
        Oops! Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: "600px",
          mx: "auto",
          color: "#455a64",
        }}
      >
        It seems like you've wandered into uncharted territory. The page you're
        looking for might have been moved, deleted, or perhaps never existed in
        the first place.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          fontStyle: "italic",
          color: "#455a64",
        }}
      >
        You'll be automatically redirected to the homepage in 15 seconds.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<HomeIcon />}
        onClick={() => navigate("/")}
        sx={{
          borderRadius: "50px",
          px: 4,
          py: 1.5,
          boxShadow: "0 8px 16px rgba(25, 118, 210, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 12px 20px rgba(25, 118, 210, 0.4)",
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
