import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const SocialBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#252b42",
        color: "#fff",
        boxShadow: 1,
        display: { xs: "none", md: "flex", lg: "flex" },
        fontFamily: "Montserrat !important",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocalPhoneIcon fontSize="small" />
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            965845451
          </Typography>
          <EmailIcon fontSize="small" sx={{ marginLeft: 2 }} />
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, letterSpacing: "0.2px" }}
          >
            swiftcart@sw.com
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Follow Us and get a chance to win 80% off
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Follow Us:
          </Typography>
          <Stack direction={"row"} spacing={1.5}>
            <InstagramIcon fontSize="small" />
            <YouTubeIcon fontSize="small" />
            <FacebookIcon fontSize="small" />
            <XIcon fontSize="small" />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SocialBar;
