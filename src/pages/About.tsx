import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import Companies from "../components/Companies";
import { useEffect } from "react";
const usersInfo = [
  { number: "15K", tag: "Happy Customers" },
  { number: "150K", tag: "Monthly Visitors" },
  { number: "15", tag: "Countries Worldwide" },
  { number: "100+", tag: "Top Partners" },
];
const team = [
  {
    imageUrl: "./src/assets/images/team3.jpg",
    username: "John Doe",
    profession: "Project Manager",
  },
  {
    imageUrl: "./src/assets/images/team1.jpg",
    username: "Karen Page",
    profession: "Senior Software Developer",
  },
  {
    imageUrl: "./src/assets/images/team2.jpg",
    username: "Jessica Jones",
    profession: "Software Developer",
  },
];
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box mt={{ xs: "50px", md: 0 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        gap={4}
        px={3}
        py={5}
      >
        <Stack maxWidth="600px" textAlign={{ xs: "center", md: "left" }}>
          <Typography color="#252b42" variant="h6" fontWeight={700}>
            ABOUT COMPANY
          </Typography>
          <Typography
            variant="h2"
            py={{ xs: "10px", sm: "20px", md: "30px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            fontSize={{ xs: "32px", md: "58px" }}
          >
            ABOUT US
          </Typography>
          <Typography
            variant="body1"
            color="#737373"
            fontWeight={500}
            maxWidth="375px"
            mx={{ xs: "auto", md: "0" }}
            pb={{ xs: "10px", sm: "20px", md: "30px" }}
            fontSize={{ xs: "14px", md: "16px" }}
          >
            We know how large objects will act, but things on a small scale.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#23a6f0",
              padding: "12px 30px",
              fontWeight: 700,
              fontSize: "14px",
              width: { xs: "200px", md: "250px" },
              mx: { xs: "auto", md: "0" },
            }}
          >
            Get Quote Now
          </Button>
        </Stack>
        <Box
          component="img"
          src="./src/assets/images/about.svg"
          height="auto"
          width={{ xs: "100%", sm: "80%", md: "500px" }}
          maxWidth="600px"
        />
      </Box>
      <Box>
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
      </Box>
      <Box width="80%" m="auto">
        <video
          src="./src/assets/video/ecommerce.mp4"
          width="100%"
          height="auto"
          controls
          loop
          autoPlay
          style={{ margin: "50px auto", borderRadius: "10px" }}
        ></video>
      </Box>
      <Container sx={{ my: "75px" }}>
        <Stack textAlign="center">
          <Typography color="#252b42" fontWeight={700} variant="h4" mb="10px">
            Meet Our Team
          </Typography>
          <Typography
            color="#737373"
            fontWeight={500}
            variant="body2"
            width={{ xs: "80%", md: "600px" }}
            margin="auto"
          >
            We are constantly working in order to make your experience better
            and provide the best service which could not be found elsewhere with
            the help of the best talents.
          </Typography>
        </Stack>
        <Grid2 container my="75px" gap={3} justifyContent="center">
          {team.map((member, idx) => (
            <Card sx={{ maxWidth: 325 }} key={idx}>
              <CardMedia
                component="img"
                height="230px"
                image={member.imageUrl}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="body1"
                  mt="30px"
                  color="#252b42"
                  fontWeight={700}
                >
                  {member.username}
                </Typography>
                <Typography
                  variant="body2"
                  py="10px"
                  color="#737373"
                  fontWeight={700}
                >
                  {member.profession}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  pb="30px"
                  pt="10px"
                  sx={{ cursor: "pointer" }}
                >
                  <NavLink to="https://www.instagram.com/" target="_blank">
                    <FacebookIcon sx={{ color: "#335bf5" }} />
                  </NavLink>
                  <NavLink to="https://www.instagram.com/" target="_blank">
                    <InstagramIcon sx={{ color: "#e51f5a" }} />
                  </NavLink>
                  <NavLink
                    to="https://www.x.com/"
                    target="_blank"
                    color="primary"
                  >
                    <XIcon />
                  </NavLink>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Grid2>
      </Container>
      <Companies />
      <Contact />
    </Box>
  );
};

export default About;
