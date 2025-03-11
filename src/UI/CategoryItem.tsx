import { Paper, styled } from "@mui/material";

export const CategoryItem = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "& .label": {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(3),
    backgroundColor: "white",
    padding: theme.spacing(1.5, 4),
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#252b42",
  },
}));
