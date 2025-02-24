import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const footerLinks = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#fafafa", fontFamily: "Montserrat" }}
    >
      <Box
        py="60px"
        maxWidth="80%"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={{ xs: 3 }}
      >
        <Typography color="#252b42" fontWeight={700} fontSize="24px">
          Swiftcart
        </Typography>
        <Stack color="#23a6f0" spacing={2} direction="row">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </Stack>
      </Box>
      <Box>
        <Box sx={{ backgroundColor: "white" }}>
          <Grid
            sx={{ maxWidth: "92%", margin: "auto" }}
            container
            spacing={4}
            justifyContent="center"
          >
            {footerLinks.map((section, index) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#252b42" }}
                >
                  {section.title}
                </Typography>
                <List>
                  {section.links.map((link, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        color: "#737373",
                        fontWeight: 700,
                        fontSize: 14,
                        p: 0,
                        py: 0.5,
                      }}
                    >
                      {link}
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#252b42" }}
              >
                Get In Touch
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <TextField
                  variant="outlined"
                  placeholder="Your Email"
                  size="small"
                  sx={{
                    flex: 1,
                    bgcolor: "#f9f9f9",
                    "& input": { fontSize: 14, fontWeight: 500 },
                    "& fieldset": { borderColor: "#e6e6e6" },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#23a6f0",
                    color: "white",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    px: 2,
                    textTransform: "none",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: "#737373", fontSize: 12, fontWeight: 500 }}
              >
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: { sm: "center", md: "left" }, py: "25px" }}>
          <Typography
            variant="body2"
            sx={{
              color: "#737373",
              fontWeight: 700,
              fontSize: 14,
              maxWidth: "80%",
              margin: "auto",
            }}
          >
            Made With Love By Krunal Pokar All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
