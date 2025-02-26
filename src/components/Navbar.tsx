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
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2Icon from "@mui/icons-material/Person2";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const navLinks = ["HOME", "SHOP", "ABOUT", "BLOG", "CONTACT"];
const settings = ["REGISTER", "LOGIN"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);

      if (currentScroll > 65) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "white",
          top: { xs: 0, md: isFixed ? "0px" : "65px" },
          position: isFixed ? "fixed" : "absolute",
          width: "100%",
          boxShadow: isFixed ? "0px 2px 10px rgba(0,0,0,0.1)" : "none",
          zIndex: 1000,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to="/" style={{ listStyle: "none", color: "white" }}>
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
            </NavLink>

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
              <SearchBar />
              <NavLink to="/cart" style={{ textDecoration: "none" }}>
                <IconButton
                  sx={{ color: "#23a6f0", display: { xs: "none", md: "flex" } }}
                >
                  <ShoppingCartIcon />
                  <Typography variant="body1">1</Typography>
                </IconButton>
              </NavLink>
              <IconButton
                sx={{ color: "#23a6f0", display: { xs: "none", md: "flex" } }}
              >
                <FavoriteBorderIcon />
                <Typography variant="body1">1</Typography>
              </IconButton>
              <Tooltip title="User Profile">
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
                    <NavLink
                      key={setting}
                      style={{ textDecoration: "none", textAlign: "center" }}
                      to={`${setting.toLowerCase()}`}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#737373",
                          fontWeight: 700,
                        }}
                      >
                        {setting}
                      </Typography>
                    </NavLink>
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
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ position: "relative" }}>
            <ChevronRightIcon
              sx={{
                width: "40px",
                height: "40px",
                position: "absolute",
                right: "230px",
              }}
            />
          </IconButton>
        </DrawerHeader>

        <Box
          sx={{ width: 300, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((navLink) => (
              <ListItem key={navLink} disablePadding>
                <NavLink
                  key={navLink}
                  style={{
                    textDecoration: "none",
                    width: "90%",
                    margin: "auto",
                  }}
                  to={navLink === "HOME" ? "/" : `${navLink.toLowerCase()}`}
                >
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
                </NavLink>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <NavLink to="/cart" style={{ textDecoration: "none" }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ color: "#23a6f0" }}
                  >
                    <ShoppingCartIcon />
                    <Typography variant="body1">1</Typography>
                  </Stack>
                </NavLink>
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
