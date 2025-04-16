import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { Order } from "../data/types";
import {
  calculateOrderTotals,
  formatDate,
  getStatusChipColor,
} from "../utils/utils";
import { useState } from "react";
import { Visibility } from "@mui/icons-material";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const { totalQuantity, totalAmount } = calculateOrderTotals(order);
  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };
  return (
    <Card
      key={order.id}
      sx={{
        marginBottom: 2,
        border: 1,
        borderColor: "grey.300",
        boxShadow: 1,
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
            label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            color={getStatusChipColor(order.status)}
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
          >
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
