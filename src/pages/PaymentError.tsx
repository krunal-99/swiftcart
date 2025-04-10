import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Avatar,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  styled,
} from "@mui/material";
import {
  ErrorOutline,
  ArrowBack,
  HelpOutline,
  FiberManualRecord,
} from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { CheckOutPath, ContactPath, ShopPath } from "../constants/constants";

const RedAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: red[100],
  color: red[600],
  width: 96,
  height: 96,
  marginBottom: 24,
  "& .MuiSvgIcon-root": {
    fontSize: 48,
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  backgroundColor: red[50],
  padding: "16px 20px",
  borderRadius: 8,
  marginBottom: 24,
  width: "100%",
}));

const OrderInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
}));

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: 24,
});

const PaymentError = () => {
  const errorCode =
    new URLSearchParams(window.location.search).get("code") || "ERR-PAYMENT";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ffebee 0%, #fff8e1 100%)",
        padding: 2,
        mt: 10,
      }}
    >
      <Fade in={true} timeout={500}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: 480,
            width: "100%",
            p: { xs: 3, md: 4 },
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <RedAvatar className="animate-pulse">
              <ErrorOutline fontSize="large" />
            </RedAvatar>

            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Payment Failed
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              We couldn't process your payment. No charges were made to your
              account.
            </Typography>

            <InfoBox>
              <OrderInfo>
                <Typography variant="body2" color="text.secondary">
                  Error Code
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {errorCode}
                </Typography>
              </OrderInfo>
              <OrderInfo>
                <Typography variant="body2" color="text.secondary">
                  Date
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {new Date().toLocaleDateString()}
                </Typography>
              </OrderInfo>
            </InfoBox>

            <Box sx={{ width: "100%", mb: 3, textAlign: "left" }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Possible reasons for failure:
              </Typography>
              <List dense disablePadding>
                {[
                  "Insufficient funds in your account",
                  "Card verification failed",
                  "Transaction was declined by your bank",
                  "Network connectivity issues",
                ].map((reason, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                    <StyledListItemIcon>
                      <FiberManualRecord
                        sx={{ fontSize: 8, color: "text.secondary" }}
                      />
                    </StyledListItemIcon>
                    <ListItemText
                      primary={reason}
                      primaryTypographyProps={{
                        variant: "body2",
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  component={Link}
                  to={CheckOutPath}
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: red[600],
                    "&:hover": { bgcolor: red[700] },
                  }}
                >
                  Try Again
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  component={Link}
                  to={ShopPath}
                  variant="outlined"
                  fullWidth
                  startIcon={<ArrowBack />}
                >
                  Back to Shop
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" color="text.secondary" align="center">
            Need help? Our customer support team is ready to assist you.
          </Typography>
        </Paper>
      </Fade>

      <Box
        sx={{
          mt: 2,
          textAlign: "center",
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          component={Link}
          to={ContactPath}
          variant="text"
          size="small"
          startIcon={<HelpOutline />}
          sx={{ color: red[600], textTransform: "none", p: 0 }}
        >
          Contact Support
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentError;
