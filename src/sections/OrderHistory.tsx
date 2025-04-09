import {
  CheckCircle,
  CreditCard,
  Inventory,
  LocalShipping,
  Schedule,
  Visibility,
  Warning,
} from "@mui/icons-material";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const orders = [
  {
    id: "ORD-2023-0001",
    date: "2023-09-01",
    total: 129.99,
    status: "delivered",
    items: [
      {
        id: "ITEM-1",
        name: "Wireless Headphones",
        price: 79.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: "ITEM-2",
        name: "Smart Watch",
        price: 49.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
    shipping: {
      method: "Express Delivery",
      address: "123 Main St, Apt 4B, New York, NY 10001",
      trackingNumber: "TRK928374651",
      estimatedDelivery: "2023-09-05",
      actualDelivery: "2023-09-04",
    },
    payment: {
      method: "Credit Card",
      last4: "4242",
      status: "Completed",
    },
  },
  {
    id: "ORD-2023-0002",
    date: "2023-08-15",
    total: 79.95,
    status: "processing",
    items: [
      {
        id: "ITEM-3",
        name: "Bluetooth Speaker",
        price: 59.95,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: "ITEM-4",
        name: "Phone Case",
        price: 19.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Apt 4B, New York, NY 10001",
      trackingNumber: "TRK583920164",
      estimatedDelivery: "2023-08-22",
    },
    payment: {
      method: "PayPal",
      email: "j***h@example.com",
      status: "Completed",
    },
  },
  {
    id: "ORD-2023-0003",
    date: "2023-07-22",
    total: 199.99,
    status: "delivered",
    items: [
      {
        id: "ITEM-5",
        name: "Smart Home Hub",
        price: 199.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
    shipping: {
      method: "Express Delivery",
      address: "123 Main St, Apt 4B, New York, NY 10001",
      trackingNumber: "TRK675920184",
      estimatedDelivery: "2023-07-26",
      actualDelivery: "2023-07-25",
    },
    payment: {
      method: "Credit Card",
      last4: "1234",
      status: "Completed",
    },
  },
  {
    id: "ORD-2023-0004",
    date: "2023-06-17",
    total: 35.5,
    status: "cancelled",
    items: [
      {
        id: "ITEM-6",
        name: "USB Cable (3-Pack)",
        price: 15.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1604671368585-d8f8239c2c49?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: "ITEM-7",
        name: "Wireless Mouse",
        price: 19.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Apt 4B, New York, NY 10001",
      trackingNumber: "TRK875920194",
      estimatedDelivery: "2023-06-24",
    },
    payment: {
      method: "Credit Card",
      last4: "5678",
      status: "Refunded",
    },
    cancelReason: "Customer requested cancellation",
  },
  {
    id: "ORD-2023-0005",
    date: "2023-05-30",
    total: 149.99,
    status: "delivered",
    items: [
      {
        id: "ITEM-8",
        name: "Fitness Tracker",
        price: 89.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: "ITEM-9",
        name: "Wireless Earbuds",
        price: 59.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1606741965429-02919c1122fa?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
    shipping: {
      method: "Standard Shipping",
      address: "123 Main St, Apt 4B, New York, NY 10001",
      trackingNumber: "TRK275920104",
      estimatedDelivery: "2023-06-06",
      actualDelivery: "2023-06-05",
    },
    payment: {
      method: "Credit Card",
      last4: "9012",
      status: "Completed",
    },
  },
];

const OrderHistory: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(
    null
  );
  const isMobile = useMediaQuery("(max-width:640px)");
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusChipColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "success";
      case "processing":
        return "info";
      case "shipped":
        return "default";
      case "cancelled":
        return "error";
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
      case "cancelled":
        return <Warning sx={{ color: "red", fontSize: 20 }} />;
      default:
        return <Inventory sx={{ color: "grey", fontSize: 20 }} />;
    }
  };

  const handleViewDetails = (order: (typeof orders)[0]) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };
  const renderOrderCard = (order: (typeof orders)[0]) => {
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
                {order.items.length}{" "}
                {order.items.length === 1 ? "item" : "items"}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                ${order.total}
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

  return (
    <>
      <Card sx={{ border: 1, borderColor: "grey.300", boxShadow: 1 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="medium" mb={3}>
            Order History
          </Typography>
          {isMobile ? (
            <Box>{orders.map((order) => renderOrderCard(order))}</Box>
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
                  {orders.map((order) => (
                    <TableRow
                      key={order.id}
                      sx={{ "&:hover": { backgroundColor: "grey.50" } }}
                    >
                      <TableCell sx={{ fontWeight: "medium" }}>
                        {order.id}
                      </TableCell>
                      <TableCell>{formatDate(order.date)}</TableCell>
                      <TableCell>{order.items.length}</TableCell>
                      <TableCell>${order.total}</TableCell>
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
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {orders.length === 0 && (
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
                    {selectedOrder.items.map((item) => (
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
                            ${item.price}
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
                        ${selectedOrder.total}
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
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography variant="body2" sx={{ color: "grey.600" }}>
                          Shipping Method
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {selectedOrder.shipping.method}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "grey.600" }}>
                          Tracking Number
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {selectedOrder.shipping.trackingNumber}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: "grey.600" }}>
                        Shipping Address
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "medium" }}
                      >
                        {selectedOrder.shipping.address}
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
                          {formatDate(selectedOrder.shipping.estimatedDelivery)}
                        </Typography>
                      </Box>
                      {selectedOrder.shipping.actualDelivery && (
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "grey.600" }}
                          >
                            Actual Delivery
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: "medium" }}
                          >
                            {formatDate(selectedOrder.shipping.actualDelivery)}
                          </Typography>
                        </Box>
                      )}
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
                          {selectedOrder.payment.method}
                        </Typography>
                      </Box>
                      {selectedOrder.payment.last4 && (
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
                            •••• {selectedOrder.payment.last4}
                          </Typography>
                        </Box>
                      )}
                      {selectedOrder.payment.email && (
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
                            {selectedOrder.payment.email}
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
                          {selectedOrder.payment.status}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {selectedOrder.status === "cancelled" &&
                  selectedOrder.cancelReason && (
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
                        <Warning fontSize="small" />
                        Cancellation Information
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "red.50",
                          padding: 2,
                          borderRadius: 1,
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "grey.700" }}>
                          Reason for Cancellation:
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: "medium", color: "grey.900" }}
                        >
                          {selectedOrder.cancelReason}
                        </Typography>
                      </Box>
                    </Box>
                  )}
              </Box>

              <DialogActions sx={{ marginTop: 3, justifyContent: "flex-end" }}>
                {selectedOrder.status === "processing" && (
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ "&:hover": { backgroundColor: "red.50" } }}
                  >
                    Cancel Order
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderHistory;
