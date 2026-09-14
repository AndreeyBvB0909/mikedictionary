import React, { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "../../styles/Navbar.css";

import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const menuOpen = Boolean(anchorEl);

  const getTabValue = () => {
    switch (location.pathname) {
      case "/phrasal-verbs":
        return 0;

      case "/consonants":
      case "/vowels":
        return 1;

      case "/gerunds-infinitives":
        return 2;

      default:
        return 0;
    }
  };

  const handlePronunciationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleConsonantsClick = () => {
    handleMenuClose();
    navigate("/consonants");
  };

  const handleVowelsClick = () => {
    handleMenuClose();
    navigate("/vowels");
  };

  return (
    <div className="navbar">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={getTabValue()}
          aria-label="navigation tabs"
          role="navigation"
          centered
          sx={{
            "& .MuiTab-root": {
              color: "white",
            },

            "& .MuiTab-root.Mui-selected": {
              color: "white",
            },

            "& .MuiTabs-indicator": {
              backgroundColor: "white",
            },
          }}
        >
          <Tab
            label="Phrasal Verbs"
            component={NavLink}
            to="/phrasal-verbs"
          />

          <Tab
            label="Pronunciation"
            onClick={handlePronunciationClick}
            aria-controls={
              menuOpen ? "pronunciation-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={
              menuOpen ? "true" : undefined
            }
          />

          <Tab
            label="Gerunds & Infinitives"
            component={NavLink}
            to="/gerunds-infinitives"
          />
        </Tabs>

        <Menu
          id="pronunciation-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleConsonantsClick}>
            Consonants
          </MenuItem>

          <MenuItem onClick={handleVowelsClick}>
            Vowels
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default Navbar;
