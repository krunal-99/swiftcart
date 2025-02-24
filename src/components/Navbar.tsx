import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  MenuItem,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2Icon from "@mui/icons-material/Person2";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = ["HOME", "SHOP", "ABOUT", "BLOG", "CONTACT"];
const settings = ["REGISTER", "LOGIN"];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              sx={{
                color: "#252b42",
                fontWeight: 800,
                letterSpacing: "0.5px",
                fontSize: { xs: "18px", sm: "24px" },
                cursor: "pointer",
              }}
            >
              Swiftcart
            </Typography>
            <Box
              sx={{ ml: 10, flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {navLinks.map((navLink) => (
                <NavLink
                  key={navLink}
                  style={{ textDecoration: "none" }}
                  to={navLink === "HOME" ? "/" : `${navLink.toLowerCase()}`}
                >
                  <Button
                    sx={{
                      my: 2,
                      color: "#737373",
                      display: "block",
                      fontWeight: 700,
                    }}
                  >
                    {navLink}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Stack spacing={1} direction="row" sx={{ ml: "auto" }}>
              <IconButton>
                <SearchIcon sx={{ color: "#23a6f0" }} />
              </IconButton>
              <IconButton
                sx={{ color: "#23a6f0", display: { xs: "none", md: "flex" } }}
              >
                <ShoppingCartIcon />
                <Typography variant="body1">1</Typography>
              </IconButton>
              <IconButton
                sx={{ color: "#23a6f0", display: { xs: "none", md: "flex" } }}
              >
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
              <IconButton
                size="large"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((navLink) => (
              <ListItem key={navLink} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={navLink}
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#737373",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ color: "#23a6f0" }}
                >
                  <ShoppingCartIcon />
                  <Typography variant="body1">1</Typography>
                </Stack>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ color: "#23a6f0" }}
                >
                  <FavoriteBorderIcon />
                  <Typography variant="body1">1</Typography>
                </Stack>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
