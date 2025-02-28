import { Box, Stack } from "@mui/material";

const companies = [
  "./src/assets/images/company1.png",
  "./src/assets/images/company2.png",
  "./src/assets/images/company3.png",
  "./src/assets/images/company4.png",
  "./src/assets/images/company5.png",
  "./src/assets/images/company6.png",
];
const CompanyLogos = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      py="70px"
      display="flex"
      flexWrap="wrap"
      bgcolor="#fafafa"
    >
      {companies.map((company, idx) => (
        <Box
          component="img"
          key={idx}
          src={company}
          height={50}
          width={150}
          margin={{ xs: "30px", md: "20px" }}
        />
      ))}
    </Stack>
  );
};

export default CompanyLogos;
