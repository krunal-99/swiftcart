import { Box, Card, CardContent, Skeleton } from "@mui/material";

interface OrderSkeletonProps {
  index: number;
}

const OrderSkeleton: React.FC<OrderSkeletonProps> = ({ index }) => {
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

export default OrderSkeleton;
