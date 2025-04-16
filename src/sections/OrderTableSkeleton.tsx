import { Skeleton, TableCell, TableRow } from "@mui/material";

const OrderTableSkeleton = () => {
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

export default OrderTableSkeleton;
