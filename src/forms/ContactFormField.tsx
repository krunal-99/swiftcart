import { Button, Grid, TextField, Typography } from "@mui/material";
import { contactFormData } from "../data/data";
import SendIcon from "@mui/icons-material/Send";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactFormField = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_mxzjcq2", "template_t3vxl2n", form.current, {
        publicKey: "DvAb6YOP1k4gB4O1R",
      })
      .then(
        () => {
          toast.success("Mail Sent successfully.");
          form.current?.reset();
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: "#252b42" }}
          >
            Send Us A Message
          </Typography>
        </Grid>
        {contactFormData.map((contact) => (
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={contact.label}
              name={contact.field}
              variant="outlined"
              required
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
              "&:hover": {
                background: "linear-gradient(45deg, #1976D2 30%, #2196F3 90%)",
              },
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactFormField;
