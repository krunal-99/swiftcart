import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledDrawerNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  width: "90%",
  margin: "auto",
  "&.active .MuiListItemText-root": {
    color: "#23a6f0",
    fontWeight: 800,
  },
  "&.active .MuiListItemButton-root": {
    backgroundColor: "rgba(35, 166, 240, 0.08)",
    borderRadius: "8px",
  },
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  position: "relative",
  "& .MuiButton-root": {
    transition: "all 0.3s ease",
  },
  "&.active .MuiButton-root": {
    color: "#23a6f0",
    fontWeight: 800,
  },
  "@keyframes fadeIn": {
    "0%": {
      width: "0%",
      opacity: 0,
    },
    "100%": {
      width: "60%",
      opacity: 1,
    },
  },
}));
