import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../features/productSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTermFormStore = useSelector(selectSearchTerm);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTermFormStore);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setLocalSearchTerm("");
      dispatch(setSearchTerm(""));
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localSearchTerm.trim()) {
      dispatch(setSearchTerm(localSearchTerm.trim()));
      navigate(`/shop?search=${encodeURIComponent(localSearchTerm.trim())}`);
    }
    setLocalSearchTerm("");
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    if (!value.trim()) {
      dispatch(setSearchTerm(""));
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "110%",
          right: "5%",
          left: 0,
          bgcolor: "white",
          border: "1px solid #252b42",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transform: isOpen ? "scale(1)" : "scale(0)",
          transformOrigin: "top right",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {isOpen && (
          <form onSubmit={handleSearch}>
            <TextField
              placeholder="Search Products"
              value={localSearchTerm}
              autoFocus
              onChange={handleInputChange}
              id="outlined-start-adornment"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                  "& fieldset": { border: "none" },
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton onClick={handleSearchToggle}>
                      <CloseIcon color="warning" />
                    </IconButton>
                  ),
                },
              }}
            />
          </form>
        )}
      </Box>
      <IconButton onClick={handleSearchToggle}>
        <SearchIcon sx={{ color: "#23a6f0" }} />
      </IconButton>
    </>
  );
};

export default SearchBar;
