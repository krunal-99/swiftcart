import {
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { DrawerHeader, StyledDrawerNavLink } from "../themes/ComponentThemes";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { navLinks } from "../data/data";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NavbarDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const location = useLocation();

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const isActiveLink = (path: string): boolean => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.includes(path)) return true;
    return false;
  };

  return (
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
              <StyledDrawerNavLink
                key={navLink}
                to={navLink === "HOME" ? "/" : `${navLink.toLowerCase()}`}
                className={({ isActive }) => (isActive ? "active" : "")}
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
              </StyledDrawerNavLink>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: isActiveLink("/cart")
                  ? "rgba(35, 166, 240, 0.08)"
                  : "transparent",
                borderRadius: "8px",
              }}
            >
              <NavLink
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "#23a6f0",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Badge
                    style={{ color: "#23a6f0" }}
                    badgeContent={cart.totalCartQuantity}
                    color="error"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </Stack>
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: isActiveLink("/wishlist")
                  ? "rgba(35, 166, 240, 0.08)"
                  : "transparent",
                borderRadius: "8px",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Badge badgeContent={wishlist.listQuantity} color="error">
                  <NavLink style={{ color: "#23a6f0" }} to="/wishlist">
                    <FavoriteBorderIcon />
                  </NavLink>
                </Badge>
              </Stack>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default NavbarDrawer;
