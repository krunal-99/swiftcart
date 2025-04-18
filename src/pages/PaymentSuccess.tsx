import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Grid,
  Avatar,
  Fade,
  styled,
} from "@mui/material";
import { CheckCircle, ShoppingBag, ArrowForward } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { ContactPath, ProfilePath, ShopPath } from "../constants/constants";
import { useQuery } from "@tanstack/react-query";
import { getOrderBySessionId } from "../utils/order";
import { OrderItem } from "../data/types";
import { useEffect } from "react";
import { clearCartItems } from "../utils/cart";
import { useSelector } from "react-redux";
import { RootState } from "../main";

const GreenAvatar = styled(Avatar)(() => ({
  backgroundColor: green[100],
  color: green[600],
  width: 96,
  height: 96,
  marginBottom: 24,
  "& .MuiSvgIcon-root": {
    fontSize: 48,
  },
}));

const InfoBox = styled(Box)(() => ({
  backgroundColor: green[50],
  padding: "16px 20px",
  borderRadius: 8,
  marginBottom: 24,
  width: "100%",
}));

const OrderInfo = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
}));

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const sessionId = new URLSearchParams(location.search).get("session_id");
  const { data: order, isLoading } = useQuery({
    queryKey: ["order", sessionId],
    queryFn: () => getOrderBySessionId(sessionId!),
    enabled: !!sessionId,
    retry: 3,
    retryDelay: 1000,
  });

  useEffect(() => {
    const clearUserCart = async () => {
      if (user?.id) {
        try {
          await clearCartItems(user.id);
        } catch (error) {
          console.error("Error clearing cart:", error);
        }
      }
    };
    clearUserCart();
  }, [user?.id]);

  const handleMyOrdersClick = () => {
    navigate(`${ProfilePath}?tab=orders`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e8f5e9 0%, #e0f7fa 100%)",
        padding: 2,
        mt: 7,
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
            <GreenAvatar>
              <CheckCircle fontSize="large" />
            </GreenAvatar>

            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Payment Successful!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Your order has been confirmed and will be shipped soon.
            </Typography>

            <InfoBox>
              <OrderInfo>
                <Typography variant="body2" color="text.secondary">
                  Order ID
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {isLoading ? "Loading..." : order?.id || "N/A"}
                </Typography>
              </OrderInfo>
              <OrderInfo>
                <Typography variant="body2" color="text.secondary">
                  Date
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {isLoading
                    ? "Loading..."
                    : order?.date || new Date().toLocaleDateString()}
                </Typography>
              </OrderInfo>
              {order && (
                <>
                  <OrderInfo>
                    <Typography variant="body2" color="text.secondary">
                      Total Amount
                    </Typography>
                    <Typography variant="body1" fontWeight="medium">
                      ₹
                      {order.items
                        .reduce(
                          (sum: number, item: OrderItem) =>
                            sum + Number(item.price) * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </Typography>
                  </OrderInfo>
                  <OrderInfo>
                    <Typography variant="body2" color="text.secondary">
                      Estimated Delivery
                    </Typography>
                    <Typography variant="body1" fontWeight="medium">
                      {new Date(order.estimatedDelivery).toLocaleDateString()}
                    </Typography>
                  </OrderInfo>
                </>
              )}
            </InfoBox>

            <Grid container spacing={2} sx={{ width: "100%", mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={handleMyOrdersClick}
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: green[600],
                    "&:hover": { bgcolor: green[700] },
                  }}
                  startIcon={<ShoppingBag />}
                >
                  My Orders
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  component={Link}
                  to={ShopPath}
                  variant="outlined"
                  fullWidth
                  endIcon={<ArrowForward />}
                >
                  Resume Shopping
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" color="text.secondary" align="center">
            Thank you for your purchase! We'll make sure to deliver the product
            soon.
          </Typography>
        </Paper>
      </Fade>

      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Having trouble?{" "}
          <Link
            to={ContactPath}
            style={{ color: green[600], textDecoration: "none" }}
          >
            Contact our support team
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentSuccess;
