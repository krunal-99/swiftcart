import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ContactForm />;
};

export default Contact;
