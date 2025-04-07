import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const cartHeading = ["Color", "Price", "Quantity", "Total", "Remove"];

export const CartTableSkeleton = () => {
  const skeletonRows = Array(3).fill(null);

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: { xs: "100%", md: "90%", lg: "80%" },
        mx: "auto",
        my: 3,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 3,
        overflowX: "auto",
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="Cart Table Loading">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
            <TableCell sx={{ fontWeight: 600 }}>Image</TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>
              Description
            </TableCell>
            {cartHeading.map((heading, index) => (
              <TableCell key={index} align="center" sx={{ fontWeight: 600 }}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {skeletonRows.map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton
                  variant="rectangular"
                  width={80}
                  height={80}
                  sx={{ borderRadius: 1 }}
                />
              </TableCell>
              <TableCell align="left">
                <Skeleton variant="text" width="80%" height={30} />
              </TableCell>
              <TableCell align="center">
                <Box display="flex" justifyContent="center">
                  <Skeleton variant="circular" width={20} height={20} />
                </Box>
              </TableCell>
              <TableCell align="center">
                <Skeleton
                  variant="text"
                  width={60}
                  height={24}
                  sx={{ mx: "auto" }}
                />
              </TableCell>
              <TableCell align="center">
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={32}
                  sx={{ mx: "auto", borderRadius: 1 }}
                />
              </TableCell>
              <TableCell align="center">
                <Skeleton
                  variant="text"
                  width={60}
                  height={24}
                  sx={{ mx: "auto" }}
                />
              </TableCell>
              <TableCell align="center">
                <Skeleton
                  variant="rectangular"
                  width={40}
                  height={40}
                  sx={{ mx: "auto" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
