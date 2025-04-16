import { CardContent, Skeleton, Stack } from "@mui/material";

const CardComponentSkeleton = () => {
  return (
    <>
      <Skeleton
        width="100%"
        height="430px"
        variant="rectangular"
        animation="wave"
        sx={{ borderRadius: "4px 4px 0 0" }}
      />
      <CardContent sx={{ textAlign: "center", mt: "25px" }}>
        <Skeleton
          width="80%"
          height={24}
          animation="wave"
          sx={{ margin: "auto" }}
        />
        <Skeleton
          width="60%"
          height={24}
          animation="wave"
          sx={{ my: "10px", marginX: "auto" }}
        />
        <Stack direction="row" spacing={1} justifyContent="center">
          <Skeleton width="40px" height={24} animation="wave" />
          <Skeleton width="40px" height={24} animation="wave" />
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center" pt="10px">
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            animation="wave"
          />
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            animation="wave"
          />
        </Stack>
      </CardContent>
    </>
  );
};

export default CardComponentSkeleton;
