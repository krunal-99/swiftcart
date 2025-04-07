import {
  Box,
  Container,
  Grid2,
  Paper,
  Skeleton,
  Stack,
  useTheme,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";

export const ProductDetailsSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "white", paddingTop: "20px" }}>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: "divider", p: 2 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Skeleton variant="rounded" width={100} height={40} />
            <Skeleton variant="rounded" width={150} height={40} />
            <Skeleton variant="rounded" width={120} height={40} />
          </Stack>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Grid2 container spacing={4} sx={{ p: 2 }}>
            <Grid2
              columns={{ xs: 12, md: 6 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Skeleton
                variant="rectangular"
                width={isMobile ? "90%" : 450}
                height={450}
                sx={{ borderRadius: "8px" }}
              />
            </Grid2>
            <Grid2 columns={{ xs: 12, md: 6 }}>
              <Stack spacing={2} sx={{ py: 10, px: 4 }}>
                <Skeleton variant="text" width="450px" height={40} />
                <Skeleton variant="text" width="450px" />
                <Skeleton variant="text" width="450px" />
                <Skeleton variant="text" width="450px" />
                <Skeleton variant="text" width="450px" />
                <Skeleton variant="text" width="450px" />
              </Stack>
            </Grid2>
          </Grid2>
        </Box>

        <Box sx={{ mt: 4, display: "none" }}>
          <Stack spacing={3} sx={{ p: 2 }}>
            {[1, 2, 3].map((_, index) => (
              <Paper
                key={index}
                sx={{ p: 2, border: "1px solid rgba(0, 0, 0, 0.12)" }}
              >
                <Stack direction="row" spacing={2} mb={2}>
                  <Skeleton variant="circular" width={48} height={48} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Skeleton variant="text" width="40%" height={24} />
                    <Skeleton variant="text" width="60%" height={20} />
                  </Box>
                </Stack>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="80%" />
              </Paper>
            ))}
          </Stack>
        </Box>

        <Box sx={{ mt: 4, display: "none" }}>
          <Stack spacing={2} sx={{ p: 2 }}>
            <Skeleton variant="text" width="40%" height={40} />
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
