import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen ? (
        <form></form>
      ) : (
        <IconButton onClick={handleSearchToggle}>
          <SearchIcon sx={{ color: "#23a6f0" }} />
        </IconButton>
      )}
    </>
  );
};

export default SearchBar;
