import React from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getTabValue = () => {
    switch (location.pathname) {
      case "/vowels":
        return 0;

      case "/phrasal-verbs":
        return 1;

      case "/gerunds-infinitives":
        return 2;

      default:
        return 0;
    }
  };

  return (
    <div className="navbar">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={getTabValue()}
          aria-label="navigation tabs"
          role="navigation"
        >
          <Tab
            label="Vowels"
            component={NavLink}
            to="/vowels"
          />

          <Tab
            label="Phrasal Verbs"
            component={NavLink}
            to="/phrasal-verbs"
          />

          <Tab
            label="Gerunds & Infinitives"
            component={NavLink}
            to="/gerunds-infinitives"
          />
        </Tabs>
      </Box>
    </div>
  );
};

export default Navbar;
