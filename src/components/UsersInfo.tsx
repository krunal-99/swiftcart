import { Container, Stack, Typography } from "@mui/material";

const usersInfo = [
  { number: "15K", tag: "Happy Customers" },
  { number: "150K", tag: "Monthly Visitors" },
  { number: "15", tag: "Countries Worldwide" },
  { number: "100+", tag: "Top Partners" },
];

const UsersInfo = () => {
  return (
    <Container sx={{ display: "flex", mx: "auto", flexWrap: "wrap" }}>
      {usersInfo.map((info, idx) => (
        <Stack
          key={idx}
          width={{ xs: "600px", sm: "40%", md: "20%" }}
          marginLeft="30px"
          textAlign="center"
          my="100px"
        >
          <Typography color="#252b42" fontWeight={700} variant="h3">
            {info.number}
          </Typography>
          <Typography color="#737373" fontWeight={700} variant="body2">
            {info.tag}
          </Typography>
        </Stack>
      ))}
    </Container>
  );
};

export default UsersInfo;
