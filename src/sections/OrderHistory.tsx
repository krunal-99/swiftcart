import { Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { getOrderByUser } from "../utils/order";
import { Order } from "../data/types";
import {
  calculateOrderTotals,
  formatDate,
  getStatusChipColor,
} from "../utils/utils";
import OrderSkeleton from "./OrderSkeleton";
import OrderCard from "./OrderCard";
import OrderTableSkeleton from "./OrderTableSkeleton";
import OrderModal from "./OrderModal";
import { NavLink } from "react-router-dom";
import { ShopPath } from "../constants/constants";

const OrderHistory: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const isMobile = useMediaQuery("(max-width:640px)");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: getOrderByUser,
    enabled: !!user?.id,
  });

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };

  if (isError) return <Typography>Error fetching orders</Typography>;

  return (
    <>
      <Card sx={{ border: 1, borderColor: "grey.300", boxShadow: 1 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="medium" mb={3}>
            Order History
          </Typography>
          {isMobile ? (
            <Box>
              {isLoading
                ? Array(4)
                    .fill(0)
                    .map((_, index) => <OrderSkeleton index={index} />)
                : orders?.map((order: Order) => <OrderCard order={order} />)}
            </Box>
          ) : (
            <TableContainer
              sx={{ border: 1, borderColor: "grey.300", borderRadius: 1 }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "grey.100" }}>
                    <TableCell sx={{ fontWeight: "medium" }}>
                      Order ID
                    </TableCell>
                    <TableCell sx={{ fontWeight: "medium" }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: "medium" }}>Items</TableCell>
                    <TableCell sx={{ fontWeight: "medium" }}>Total</TableCell>
                    <TableCell sx={{ fontWeight: "medium" }}>Status</TableCell>
                    <TableCell
                      sx={{ fontWeight: "medium", textAlign: "right" }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isLoading ? (
                    <OrderTableSkeleton />
                  ) : (
                    orders?.map((order: Order) => {
                      const { totalQuantity, totalAmount } =
                        calculateOrderTotals(order);
                      return (
                        <TableRow
                          key={order.id}
                          sx={{ "&:hover": { backgroundColor: "grey.50" } }}
                        >
                          <TableCell sx={{ fontWeight: "medium" }}>
                            {order.id}
                          </TableCell>
                          <TableCell>{formatDate(order.date)}</TableCell>
                          <TableCell>{totalQuantity}</TableCell>
                          <TableCell>₹ {totalAmount}</TableCell>
                          <TableCell>
                            <Chip
                              label={
                                order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)
                              }
                              color={getStatusChipColor(order.status)}
                            />
                          </TableCell>
                          <TableCell sx={{ textAlign: "right" }}>
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => handleViewDetails(order)}
                              startIcon={<Visibility fontSize="small" />}
                            >
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {!isLoading && orders?.length === 0 && (
            <Box sx={{ paddingY: 4, textAlign: "center" }}>
              <Typography variant="body1" sx={{ color: "grey.600" }}>
                You haven't placed any orders yet.
              </Typography>
              <NavLink to={ShopPath}>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 2,
                    backgroundColor: "#667eea",
                    "&:hover": { backgroundColor: "#5a71d6" },
                  }}
                >
                  Start Shopping
                </Button>
              </NavLink>
            </Box>
          )}
        </CardContent>
      </Card>
      <OrderModal
        selectedOrder={selectedOrder!}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
      />
    </>
  );
};

export default OrderHistory;
