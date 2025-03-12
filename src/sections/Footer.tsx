import {
  Box,
  Button,
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
import { NavLink } from "react-router-dom";
import { footerLinks } from "../data/data";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
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
        <NavLink to="/" style={{ listStyle: "none", color: "white" }}>
          <Typography
            color="#252b42"
            fontWeight={700}
            fontSize="24px"
            sx={{ cursor: "pointer" }}
          >
            Swiftcart
          </Typography>
        </NavLink>
        <Stack spacing={2} direction="row" sx={{ cursor: "pointer" }}>
          <NavLink
            to="https://www.facebook.com/"
            target="_blank"
            style={{ listStyle: "none", color: "#23a6f0" }}
          >
            <FacebookIcon />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            target="_blank"
            style={{ listStyle: "none", color: "#23a6f0" }}
          >
            <InstagramIcon />
          </NavLink>
          <NavLink
            to="https://www.x.com/"
            target="_blank"
            style={{ listStyle: "none", color: "#23a6f0" }}
          >
            <XIcon />
          </NavLink>
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
                  sx={{ fontWeight: 700, color: "#252b42", cursor: "pointer" }}
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
                        cursor: "pointer",
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
    </Box>
  );
};

export default Footer;
