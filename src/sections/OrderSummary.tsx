import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Box,
  Divider,
  Skeleton,
} from "@mui/material";
import { ShoppingBag as ShoppingBagIcon } from "@mui/icons-material";
import { Summary } from "../data/types";

const OrderSummary = ({
  summary,
  loading,
}: {
  summary: Summary;
  loading: boolean;
}) => {
  const { items, subtotal, shipping, total } = summary;

  if (loading) {
    return (
      <Card
        sx={{
          position: "sticky",
          top: 16,
          boxShadow: 4,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "grey.300",
          overflow: "hidden",
        }}
      >
        <CardHeader
          sx={{ backgroundColor: "grey.100", paddingY: 2 }}
          title={<Skeleton width={120} height={30} />}
          subheader={<Skeleton width={80} height={20} />}
        />
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[...Array(2)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  paddingY: 2,
                  borderBottom: "1px solid",
                  borderColor: "grey.300",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width={64}
                  height={64}
                  sx={{ borderRadius: 2 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Skeleton width={150} height={20} />
                  <Skeleton width={50} height={16} />
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Skeleton width={60} height={20} />
                  <Skeleton width={80} height={16} />
                </Box>
              </Box>
            ))}
            <Divider />
            <Box sx={{ mt: 2 }}>
              <Skeleton width="100%" height={20} />
              <Skeleton width="100%" height={20} sx={{ mt: 1 }} />
              <Skeleton width="100%" height={30} sx={{ mt: 2 }} />
            </Box>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Skeleton width={120} height={20} sx={{ mx: "auto" }} />
              <Skeleton width={150} height={16} sx={{ mx: "auto", mt: 1 }} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        position: "sticky",
        top: 16,
        boxShadow: 4,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "grey.300",
        overflow: "hidden",
      }}
    >
      <CardHeader
        sx={{ backgroundColor: "grey.100", paddingY: 2 }}
        title={
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <ShoppingBagIcon fontSize="small" /> Order Summary
          </Typography>
        }
        subheader={<Typography variant="body2">Review your items</Typography>}
      />
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ maxHeight: 300, overflow: "auto", paddingRight: 1 }}>
            {items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  paddingY: 2,
                  borderBottom: "1px solid",
                  borderColor: "grey.300",
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    overflow: "hidden",
                    flexShrink: 0,
                    boxShadow: 1,
                  }}
                >
                  <img
                    src={item.product.imageUrls[0]}
                    alt={item.product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "medium" }}>
                    {item.product.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.600" }}>
                    Qty: {item.quantity}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "medium" }}>
                    ₹ {Number(item.product.salePrice) * item.quantity}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.600" }}>
                    ₹ {Number(item.product.salePrice)} each
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Divider />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Subtotal</TableCell>
                <TableCell align="right">₹ {subtotal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Shipping</TableCell>
                <TableCell align="right">₹ {shipping}</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow sx={{ backgroundColor: "grey.100" }}>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                >
                  ₹ {total}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <Box
            sx={{
              padding: 2,
              backgroundColor: "grey.100",
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "medium" }}>
              Estimated Delivery
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.600" }}>
              {new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000
              ).toLocaleDateString()}{" "}
              -
              {new Date(
                Date.now() + 10 * 24 * 60 * 60 * 1000
              ).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
