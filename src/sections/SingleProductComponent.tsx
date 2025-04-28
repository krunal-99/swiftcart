import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../utils/product";

const SingleProductComponent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => getProductById(36),
  });

  if (isError) return <div>Something went wrong.</div>;

  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        mt: "75px",
        display: "grid",
        gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: { xs: 4, md: 0 },
        pb: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "300px", sm: "400px", md: "500px" },
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "90%",
                md: "400px",
                lg: "500px",
                xl: "600px",
              },
            }}
          />
        ) : (
          <Box
            component="img"
            src={`${data.imageUrls?.[0]}`}
            alt="Product Image"
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "90%",
                md: "400px",
                lg: "500px",
                xl: "600px",
              },
              height: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </Box>

      <Stack
        spacing={2}
        sx={{
          textAlign: { xs: "center", md: "left" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="text"
            width="80%"
            height={50}
            sx={{
              fontSize: { xs: "30px", sm: "36px", md: "40px" },
            }}
          />
        ) : (
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "30px", sm: "36px", md: "40px" },
              fontWeight: 700,
              color: "#252b42",
              lineHeight: { xs: "40px", md: "50px" },
            }}
          >
            {data.title}
          </Typography>
        )}
        {isLoading ? (
          <Stack spacing={1} width="100%">
            <Skeleton variant="text" width="80%" height={30} />
            <Skeleton variant="text" width="70%" height={30} />
          </Stack>
        ) : (
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: 500,
              color: "#737373",
              maxWidth: "400px",
            }}
          >
            {data.short_description}
          </Typography>
        )}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            pt: 3,
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          {isLoading ? (
            <>
              <Skeleton
                variant="rectangular"
                width={120}
                height={50}
                sx={{ borderRadius: "4px" }}
              />
              <Skeleton
                variant="rectangular"
                width={120}
                height={50}
                sx={{ borderRadius: "4px" }}
              />
            </>
          ) : (
            <>
              <NavLink to="/product/36">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2dc071",
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    "&:hover": { backgroundColor: "#28a961" },
                  }}
                >
                  BUY NOW
                </Button>
              </NavLink>
              <NavLink to="/product/36">
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#2dc071",
                    color: "#2dc071",
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    "&:hover": { borderColor: "#28a961", color: "#28a961" },
                  }}
                >
                  READ MORE
                </Button>
              </NavLink>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleProductComponent;
