import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2Icon from "@mui/icons-material/Person2";
import { useState } from "react";

const navLinks = ["HOME", "SHOP", "ABOUT", "BLOG", "CONTACT"];
const settings = ["REGISTER", "LOGIN"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h5"
              sx={{
                color: "#252b42",
                fontWeight: 800,
                letterSpacing: "0.5px",
                fontSize: "24px",
              }}
            >
              Swiftcart
            </Typography>
            <Box
              sx={{ ml: 10, flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {navLinks.map((navLink) => (
                <Button
                  key={navLink}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#737373",
                    display: "block",
                    fontWeight: 700,
                  }}
                >
                  {navLink}
                </Button>
              ))}
            </Box>
            <Stack spacing={2} direction="row" sx={{ ml: "auto" }}>
              <IconButton>
                <SearchIcon sx={{ color: "#23a6f0" }} />
              </IconButton>
              <IconButton sx={{ color: "#23a6f0" }}>
                <ShoppingCartIcon />
                <Typography variant="body1">1</Typography>
              </IconButton>
              <IconButton sx={{ color: "#23a6f0" }}>
                <FavoriteBorderIcon />
                <Typography variant="body1">1</Typography>
              </IconButton>
              <Tooltip title="Open Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: "#23a6f0" }}>
                    <Person2Icon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#737373",
                        fontWeight: 700,
                      }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {navLinks.map((navLink) => (
                    <MenuItem key={navLink} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontWeight: 700,
                          color: "#737373",
                        }}
                      >
                        {navLink}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
