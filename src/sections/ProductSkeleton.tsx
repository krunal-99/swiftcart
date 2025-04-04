import { Box, Container, IconButton, Skeleton, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const ProductSkeleton = () => {
  return (
    <>
      <Box pt={8} width={{ xs: "100%", sm: "90%", md: "72%" }} margin="auto">
        <Stack py="30px" direction="row" alignItems="center" flexWrap="wrap">
          <Skeleton width={60} height={24} />
          <IconButton disabled>
            <ArrowForwardIosIcon sx={{ width: "15px", color: "#e0e0e0" }} />
          </IconButton>
          <Skeleton width={40} height={24} />
        </Stack>
      </Box>
      <Container sx={{ pb: "50px" }}>
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <Stack alignItems="center" width={{ xs: "100%", md: "50%" }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              sx={{
                borderRadius: "10px",
                height: { xs: 250, sm: 350, md: 450 },
              }}
            />
            <Stack
              mt="10px"
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
            >
              {[1, 2, 3, 4].map((idx) => (
                <Skeleton
                  key={idx}
                  variant="rectangular"
                  width={80}
                  height={60}
                />
              ))}
            </Stack>
          </Stack>
          <Stack
            spacing={2}
            px={{ xs: 2, sm: 0 }}
            width={{ xs: "100%", md: "50%" }}
          >
            <Skeleton variant="text" height={40} width="80%" />
            <Stack
              direction="row"
              py="15px"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={1}
            >
              <Skeleton variant="rectangular" width={150} height={30} />
              <Skeleton variant="text" width={80} height={24} />
            </Stack>
            <Skeleton variant="text" height={40} width={120} />
            <Skeleton variant="text" height={100} width="100%" />
            <Stack
              direction="row"
              spacing={2}
              pb="30px"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {[1, 2, 3].map((idx) => (
                <Skeleton key={idx} variant="circular" width={30} height={30} />
              ))}
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "center", sm: "flex-start" }}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Skeleton
                variant="rectangular"
                width={200}
                height={50}
                sx={{ borderRadius: "4px" }}
              />
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
