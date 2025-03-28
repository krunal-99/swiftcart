import { Skeleton } from "@mui/material";
import CarouselComponent from "../components/CarouselComponent";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../utils/utils";

const HeroSkeleton = () => {
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

const HeroSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["featured"],
    queryFn: getFeaturedProducts,
  });
  if (isLoading) return <HeroSkeleton />;
  if (isError) return <div>Error: {"Something went wrong."}</div>;
  return Array.isArray(data) ? <CarouselComponent carouselData={data} /> : null;
};

export default HeroSection;
