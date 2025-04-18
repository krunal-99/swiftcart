import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Divider,
  Grid,
  Paper,
  IconButton,
  Avatar,
  useTheme,
} from "@mui/material";
import { Order } from "../data/types";
import {
  calculateOrderTotals,
  formatDate,
  getStatusChipColor,
} from "../utils/utils";
import { useState } from "react";
import {
  Visibility,
  Close as CloseIcon,
  ShoppingBag,
  CalendarToday,
  LocalShipping,
  CreditCard,
} from "@mui/icons-material";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const { totalQuantity, totalAmount } = calculateOrderTotals(order);
  const theme = useTheme();

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };

  const handleClose = () => {
    setIsDetailOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <Card
        key={order.id}
        sx={{
          marginBottom: 2,
          border: 1,
          borderColor: "grey.300",
          boxShadow: 1,
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 3,
          },
        }}
      >
        <CardContent sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                {order.id}
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                {formatDate(order.date)}
              </Typography>
            </Box>
            <Chip
              label={
                order.status.charAt(0).toUpperCase() + order.status.slice(1)
              }
              color={getStatusChipColor(order.status)}
              sx={{ fontWeight: "medium" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                ₹ {totalAmount}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleViewDetails(order)}
              startIcon={<Visibility fontSize="small" />}
              sx={{
                borderRadius: 28,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                },
              }}
            >
              Details
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Dialog
        open={isDetailOpen}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: 24,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: theme.palette.primary.main,
            color: "white",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ShoppingBag />
            <Typography variant="h6">Order Details</Typography>
          </Box>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 3, mt: 2 }}>
          {selectedOrder && (
            <>
              <Box
                sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    <ShoppingBag />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {selectedOrder.id}
                    </Typography>
                    <Chip
                      label={
                        selectedOrder.status.charAt(0).toUpperCase() +
                        selectedOrder.status.slice(1)
                      }
                      color={getStatusChipColor(selectedOrder.status)}
                      size="small"
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="body2" color="text.secondary">
                    Total Amount
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.primary.main,
                    }}
                  >
                    ₹ {totalAmount}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: theme.palette.grey[50],
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <CalendarToday fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Order Date
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {formatDate(selectedOrder.date)}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: theme.palette.grey[50],
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <LocalShipping fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Items
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {selectedOrder.items && selectedOrder.items.length > 0 && (
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 1, fontWeight: "medium" }}
                  >
                    Order Items
                  </Typography>
                  <Paper variant="outlined" sx={{ borderRadius: 2 }}>
                    {selectedOrder.items.map((item, index) => (
                      <Box key={index}>
                        <Box
                          sx={{
                            p: 2,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "medium" }}
                            >
                              {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Qty: {item.quantity}
                            </Typography>
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "medium" }}
                          >
                            ₹ {Number(item.price) * item.quantity}
                          </Typography>
                        </Box>
                        {index < selectedOrder.items.length - 1 && <Divider />}
                      </Box>
                    ))}
                  </Paper>
                </Box>
              )}

              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CreditCard />
                <Typography variant="body1">
                  Payment Status:{" "}
                  <strong>{selectedOrder.paymentStatus || "Processing"}</strong>
                </Typography>
              </Box>
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2, justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              borderRadius: 28,
              px: 4,
              textTransform: "none",
              fontWeight: "medium",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderCard;
