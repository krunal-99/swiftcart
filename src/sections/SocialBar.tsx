import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
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
          <LocalPhoneIcon
            fontSize="small"
            sx={{ "&:hover": { color: "orange" }, cursor: "pointer" }}
          />
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              "&:hover": { color: "orange" },
              cursor: "pointer",
            }}
          >
            965845451
          </Typography>
          <EmailIcon
            fontSize="small"
            sx={{
              marginLeft: 2,
              "&:hover": { color: "orange" },
              cursor: "pointer",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.2px",
              "&:hover": { color: "orange" },
              cursor: "pointer",
            }}
          >
            swiftcart@sw.com
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              "&:hover": { color: "orange" },
              cursor: "pointer",
            }}
          >
            Follow Us and get a chance to win 80% off
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, cursor: "pointer" }}
          >
            Follow Us:
          </Typography>
          <Stack direction={"row"} spacing={1.5}>
            <NavLink
              to="https://www.instagram.com/"
              target="_blank"
              style={{ listStyle: "none", color: "white" }}
            >
              <InstagramIcon
                sx={{ "&:hover": { color: "orange" }, cursor: "pointer" }}
                fontSize="small"
              />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/"
              target="_blank"
              style={{ listStyle: "none", color: "white" }}
            >
              <YouTubeIcon
                sx={{ "&:hover": { color: "orange" }, cursor: "pointer" }}
                fontSize="small"
              />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/"
              target="_blank"
              style={{ listStyle: "none", color: "white" }}
            >
              <FacebookIcon
                sx={{ "&:hover": { color: "orange" }, cursor: "pointer" }}
                fontSize="small"
              />
            </NavLink>
            <NavLink
              to="https://www.x.com/"
              target="_blank"
              style={{ listStyle: "none", color: "white" }}
            >
              <XIcon
                sx={{ "&:hover": { color: "orange" }, cursor: "pointer" }}
                fontSize="small"
              />
            </NavLink>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SocialBar;
