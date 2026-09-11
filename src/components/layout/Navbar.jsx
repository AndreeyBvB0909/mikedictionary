import React, { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../styles/Navbar.css"

import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const menuOpen = Boolean(anchorEl);

  const getTabValue = () => {
    switch (location.pathname) {
      case "/vowels":
        return 0;

      case "/phrasal-verbs":
        return 1;

      case "/gerunds":
      case "/infinitives":
        return 2;

      default:
        return 0;
    }
  };

  const handleGerundsInfinitivesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleGerundsClick = () => {
    handleMenuClose();
    navigate("/gerunds");
  };

  const handleInfinitivesClick = () => {
    handleMenuClose();
    navigate("/infinitives");
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
          <Tab label="Vowels" component={NavLink} to="/vowels" />

          <Tab label="Phrasal Verbs" component={NavLink} to="/phrasal-verbs" />

          <Tab
            label="Gerunds & Infinitives"
            onClick={handleGerundsInfinitivesClick}
            aria-controls={menuOpen ? "gerunds-infinitives-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? "true" : undefined}
          />
        </Tabs>

        <Menu
          id="gerunds-infinitives-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleGerundsClick}>Gerunds</MenuItem>

          <MenuItem onClick={handleInfinitivesClick}>Infinitives</MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default Navbar;
