import {
  CheckCircle,
  CreditCard,
  Inventory,
  LocalShipping,
  Schedule,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Skeleton,
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
import { Order, OrderItem } from "../data/types";

const OrderHistory: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const isMobile = useMediaQuery("(max-width:640px)");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: () => getOrderByUser(user?.id!),
    enabled: !!user?.id,
  });

  console.log("ORDERS", orders);

  const getStatusChipColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "success";
      case "processing":
        return "info";
      case "shipped":
        return "default";
      default:
        return "default";
    }
  };

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

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };

  const renderSkeletonCard = (index: number) => {
    return (
      <Card
        key={index}
        sx={{ mb: 2, border: 1, borderColor: "grey.300", boxShadow: 1 }}
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
              <Skeleton variant="text" width={120} height={24} />
              <Skeleton variant="text" width={160} height={20} />
            </Box>
            <Skeleton variant="rounded" width={90} height={32} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Skeleton variant="text" width={80} height={20} />
              <Skeleton variant="text" width={60} height={24} />
            </Box>
            <Skeleton variant="rounded" width={100} height={36} />
          </Box>
        </CardContent>
      </Card>
    );
  };

  const renderOrderCard = (order: Order) => {
    const { totalQuantity, totalAmount } = calculateOrderTotals(order);
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
              label={
                order.status.charAt(0).toUpperCase() + order.status.slice(1)
              }
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

  const renderSkeletonRows = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton variant="text" width={120} height={24} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width={150} height={24} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width={30} height={24} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width={60} height={24} />
          </TableCell>
          <TableCell>
            <Skeleton variant="rounded" width={90} height={32} />
          </TableCell>
          <TableCell sx={{ textAlign: "right" }}>
            <Skeleton variant="rounded" width={100} height={36} />
          </TableCell>
        </TableRow>
      ));
  };

  if (isError) return <Typography>Error fetching orders</Typography>;

  const calculateOrderTotals = (order: Order | null) => {
    if (!order || !order.items) {
      return { totalQuantity: 0, totalAmount: "0.00" };
    }

    const totalQuantity = order.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const totalAmount = order.items
      .reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
      .toFixed(2);

    return { totalQuantity, totalAmount };
  };

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
                    .map((_, index) => renderSkeletonCard(index))
                : orders?.map((order: Order) => renderOrderCard(order))}
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
                  {isLoading
                    ? renderSkeletonRows()
                    : orders?.map((order: Order) => {
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
                      })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {!isLoading && orders?.length === 0 && (
            <Box sx={{ paddingY: 4, textAlign: "center" }}>
              <Typography variant="body1" sx={{ color: "grey.600" }}>
                You haven't placed any orders yet.
              </Typography>
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
            </Box>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        fullWidth
      >
        <DialogContent
          sx={{ maxHeight: "90vh", overflowY: "auto", padding: 3 }}
        >
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
                          <Typography
                            variant="body2"
                            sx={{ color: "grey.600" }}
                          >
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
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
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
                      {selectedOrder.paymentLast4 && (
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "grey.600" }}
                          >
                            Card
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: "medium" }}
                          >
                            •••• {selectedOrder.paymentLast4}
                          </Typography>
                        </Box>
                      )}
                      {selectedOrder.paymentEmail && (
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "grey.600" }}
                          >
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
    </>
  );
};

export default OrderHistory;
