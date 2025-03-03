import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Search Term:", searchTerm);
    }
    setSearchTerm("");
    setIsOpen(false);
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
              autoComplete="false"
              placeholder="Search"
              value={searchTerm}
              autoFocus
              onChange={(e) => setSearchTerm(e.target.value)}
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
