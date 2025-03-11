import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  MenuItem,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2Icon from "@mui/icons-material/Person2";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { getTotals } from "../store/cartSlice";
import { getListTotal } from "../store/wishListSlice";
import { StyledNavLink } from "../themes/ComponentThemes";
import { navLinks } from "../data/data";
import NavbarDrawer from "./NavbarDrawer";

const settings = ["REGISTER", "LOGIN"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const cart = useSelector((state: RootState) => state.cart);

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

  const wishlist = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
    dispatch(getListTotal());
  }, [cart, dispatch]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const isActiveLink = (path: string): boolean => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <>
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
                <StyledNavLink
                  key={navLink}
                  style={{ textDecoration: "none" }}
                  to={navLink === "HOME" ? "/" : `${navLink.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
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
                </StyledNavLink>
              ))}
            </Box>
            <Stack spacing={1} direction="row" sx={{ ml: "auto" }}>
              <SearchBar />
              <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                <Badge badgeContent={wishlist.listQuantity} color="error">
                  <NavLink style={{ color: "#23a6f0" }} to="/wishlist">
                    <FavoriteBorderIcon />
                  </NavLink>
                </Badge>
              </IconButton>
              <NavLink to="/cart" style={{ textDecoration: "none" }}>
                <IconButton
                  sx={{
                    color: "#23a6f0",
                    transition: "color 0.3s ease",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Badge badgeContent={cart.totalCartQuantity} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </NavLink>
              <Tooltip title="User Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{
                      bgcolor: "#23a6f0",
                    }}
                  >
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
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{
                      backgroundColor: isActiveLink(`/${setting.toLowerCase()}`)
                        ? "rgba(35, 166, 240, 0.08)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(35, 166, 240, 0.12)",
                      },
                    }}
                  >
                    <NavLink
                      key={setting}
                      style={{ textDecoration: "none", textAlign: "center" }}
                      to={`${setting.toLowerCase()}`}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: isActiveLink(`/${setting.toLowerCase()}`)
                            ? "#23a6f0"
                            : "#737373",
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
      <NavbarDrawer />
    </>
  );
};

export default Navbar;
