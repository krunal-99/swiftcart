import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ContactComponent />;
};

export default Contact;
