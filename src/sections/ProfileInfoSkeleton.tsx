import { Box, Card, CardContent, Skeleton } from "@mui/material";

const ProfileInfoSkeleton = () => {
  return (
    <Card
      sx={{
        marginBottom: 3,
        border: 1,
        borderColor: "grey.300",
        boxShadow: 1,
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Skeleton variant="text" width={200} height={32} />
          <Skeleton variant="rounded" width={120} height={36} />
        </Box>

        <Box mb={4} display="flex" flexDirection="column" alignItems="center">
          <Skeleton
            variant="circular"
            width={120}
            height={120}
            sx={{ mb: 2 }}
          />
          <Skeleton variant="text" width={120} height={24} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="rounded" height={56} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Skeleton variant="text" width={100} height={24} />
            <Skeleton variant="rounded" height={56} />
          </Box>
        </Box>

        <Skeleton
          variant="text"
          width={200}
          height={32}
          sx={{ mt: 4, mb: 2 }}
        />

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={2}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            gridColumn={{ md: "span 2" }}
          >
            <Skeleton variant="text" width={120} height={24} />
            <Skeleton variant="rounded" height={80} />
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Skeleton variant="text" width={40} height={24} />
            <Skeleton variant="rounded" height={56} />
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Skeleton variant="text" width={50} height={24} />
            <Skeleton variant="rounded" height={56} />
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Skeleton variant="text" width={70} height={24} />
            <Skeleton variant="rounded" height={56} />
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Skeleton variant="text" width={60} height={24} />
            <Skeleton variant="rounded" height={56} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileInfoSkeleton;
