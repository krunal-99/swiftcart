import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  calculateOrderTotals,
  formatDate,
  getStatusChipColor,
} from "../utils/utils";
import { Order, OrderItem } from "../data/types";
import {
  CheckCircle,
  CreditCard,
  Inventory,
  LocalShipping,
  Schedule,
} from "@mui/icons-material";

interface OrderModalProps {
  selectedOrder: Order;
  isDetailOpen: boolean;
  setIsDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal: React.FC<OrderModalProps> = ({
  selectedOrder,
  isDetailOpen,
  setIsDetailOpen,
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle sx={{ color: "green", fontSize: 20 }} />;
      case "processing":
        return <Schedule sx={{ color: "blue", fontSize: 20 }} />;
      case "shipped":
        return <LocalShipping sx={{ color: "purple", fontSize: 20 }} />;
      default:
        return <Inventory sx={{ color: "grey", fontSize: 20 }} />;
    }
  };
  return (
    <Dialog
      open={isDetailOpen}
      onClose={() => setIsDetailOpen(false)}
      fullWidth
    >
      <DialogContent sx={{ maxHeight: "90vh", overflowY: "auto", padding: 3 }}>
        {selectedOrder && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 2,
              }}
            >
              <Box>
                <DialogTitle sx={{ fontSize: "1.25rem" }}>
                  Order {selectedOrder.id}
                </DialogTitle>
                <Typography variant="body2" sx={{ color: "grey.600" }}>
                  Placed on {formatDate(selectedOrder.date)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {getStatusIcon(selectedOrder.status)}
                <Chip
                  label={
                    selectedOrder.status.charAt(0).toUpperCase() +
                    selectedOrder.status.slice(1)
                  }
                  color={getStatusChipColor(selectedOrder.status)}
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "medium",
                    marginBottom: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Inventory fontSize="small" />
                  Order Items
                </Typography>
                <Box
                  sx={{
                    border: 1,
                    borderColor: "grey.300",
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  {selectedOrder.items.map((item: OrderItem) => (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderBottom: 1,
                        borderColor: "grey.300",
                        padding: 2,
                        gap: 2,
                        "&:last-child": { borderBottom: "none" },
                      }}
                    >
                      <Box
                        sx={{
                          height: 64,
                          width: 64,
                          borderRadius: 1,
                          backgroundColor: "grey.100",
                          flexShrink: 0,
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.600" }}>
                          Quantity: {item.quantity}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "medium" }}
                        >
                          ₹ {(Number(item.price) * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                  <Box
                    sx={{
                      padding: 2,
                      backgroundColor: "grey.50",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: "medium" }}
                    >
                      Total
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      ₹ {calculateOrderTotals(selectedOrder).totalAmount}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "medium",
                    marginBottom: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <LocalShipping fontSize="small" />
                  Shipping Information
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "grey.50",
                    padding: 2,
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ color: "grey.600" }}>
                      Shipping Address
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: "medium" }}
                    >
                      {selectedOrder.shippingAddress}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ color: "grey.600" }}>
                        Estimated Delivery
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "medium" }}
                      >
                        {formatDate(selectedOrder.estimatedDelivery)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "medium",
                    marginBottom: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CreditCard fontSize="small" />
                  Payment Information
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "grey.50",
                    padding: 2,
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ color: "grey.600" }}>
                        Payment Method
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "medium" }}
                      >
                        {selectedOrder.paymentMethod}
                      </Typography>
                    </Box>
                    {selectedOrder.paymentEmail && (
                      <Box>
                        <Typography variant="body2" sx={{ color: "grey.600" }}>
                          Account
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {selectedOrder.paymentEmail}
                        </Typography>
                      </Box>
                    )}
                    <Box>
                      <Typography variant="body2" sx={{ color: "grey.600" }}>
                        Payment Status
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "medium" }}
                      >
                        {selectedOrder.paymentStatus}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
