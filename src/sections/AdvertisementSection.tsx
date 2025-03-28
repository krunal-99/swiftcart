import { useQuery } from "@tanstack/react-query";
import CarouselComponent from "../components/CarouselComponent";
import { getAdProducts } from "../utils/utils";
import { Skeleton } from "@mui/material";

const AdvertisementSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      width="100%"
      height="92vh"
      animation="wave"
      sx={{ transform: "none", mt: { xs: "65px", md: 0 } }}
    />
  );
};

const AdvertisementSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adData"],
    queryFn: getAdProducts,
  });
  if (isLoading) return <AdvertisementSkeleton />;
  if (isError) return <div>Error: {"Something went wrong"}</div>;
  return Array.isArray(data) ? <CarouselComponent carouselData={data} /> : null;
};

export default AdvertisementSection;
