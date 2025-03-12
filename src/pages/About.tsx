import { Box } from "@mui/material";
import Companies from "../sections/Companies";
import AboutHero from "../sections/AboutHero";
import UsersInfo from "../sections/UsersInfo";
import VideoComponent from "../sections/VideoComponent";
import OurTeam from "../sections/OurTeam";
import ContactComponent from "../sections/ContactComponent";

const About = () => {
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
