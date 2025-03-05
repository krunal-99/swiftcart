import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const ContactForm: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 15 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              sx={{ mb: 4, color: "#737373" }}
            >
              We'd love to hear from you! Whether you have a question about our
              products, orders, returns, or anything else, our team is ready to
              answer all your questions.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{ p: 3, bgcolor: "background.default", borderRadius: 2 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                }}
              >
                <EmailIcon sx={{ color: "white" }} />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#252b42", fontWeight: 600 }}
                >
                  Email Us
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#737373" }}
                  fontWeight={400}
                >
                  swiftcart@sw.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                }}
              >
                <LocalPhoneIcon sx={{ color: "white" }} />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#252b42", fontWeight: 600 }}
                >
                  Call Us
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#737373" }}
                  fontWeight={400}
                >
                  965845451
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                }}
              >
                <MyLocationIcon sx={{ color: "white" }} />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#252b42", fontWeight: 600 }}
                >
                  Visit Us
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#737373" }}
                  fontWeight={400}
                >
                  C-105, Shival Heights, Udhana, Surat
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.95))",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <form action="https://formspree.io/f/mjkgngyk" method="POST">
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number (Optional)"
                    name="phone"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="phone"
                    variant="outlined"
                    required
                  />
                </Grid>

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
                      background:
                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #1976D2 30%, #2196F3 90%)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
