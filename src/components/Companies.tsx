import { Container, Stack, Typography } from "@mui/material";
import CompanyLogos from "./CompanyLogos";

const Companies = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "#fafafa", textAlign: "center", pt: "80px" }}
      >
        <Stack>
          <Typography color="#252b42" fontWeight={700} variant="h4">
            Big Companies Are Here
          </Typography>
          <Typography
            variant="body1"
            color="#737373"
            fontWeight={500}
            width={{ xs: "80%", md: "600px" }}
            margin="auto"
            py="30px"
          >
            Trusted by top companies across industries to create innovative
            solutions. Transforming ideas into reality with expertise, passion,
            and excellence.
          </Typography>
        </Stack>
        <CompanyLogos />
      </Container>
    </div>
  );
};

export default Companies;
