import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      my="80px"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              flex: isMobile ? "none" : 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              minHeight: isMobile ? "200px" : "auto",
            }}
          >
            <ShoppingBagIcon sx={{ width: "150px", height: "150px" }} />
            <Typography
              variant="h4"
              component="h1"
              sx={{ mt: 3, fontWeight: 700 }}
            >
              Swiftcart
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, textAlign: "center", maxWidth: "80%" }}
            >
              Your one-stop destination for all your shopping needs. Discover
              amazing products at unbeatable prices.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: isMobile ? "none" : 1,
              p: { xs: 3, sm: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 1, fontWeight: 600 }}
            >
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {subtitle}
            </Typography>
            {children}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthLayout;
