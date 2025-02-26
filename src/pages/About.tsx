import { Box } from "@mui/material";
import Companies from "../components/Companies";
import { useEffect } from "react";
import AboutHero from "../components/AboutHero";
import UsersInfo from "../components/UsersInfo";
import VideoComponent from "../components/VideoComponent";
import OurTeam from "../components/OurTeam";
import ContactComponent from "../components/ContactComponent";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box mt={{ xs: "50px", md: 0 }}>
      <AboutHero />
      <UsersInfo />
      <VideoComponent />
      <OurTeam />
      <Companies />
      <ContactComponent />
    </Box>
  );
};

export default About;
