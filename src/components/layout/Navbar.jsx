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
  const [vocabularyAnchorEl, setVocabularyAnchorEl] = useState(null);

  const menuOpen = Boolean(anchorEl);
  const vocabularyMenuOpen = Boolean(vocabularyAnchorEl);

  const getTabValue = () => {
    switch (location.pathname) {
      case "/phrasal-verbs":
        return 0;

      case "/consonants":
      case "/vowels":
        return 1;

      case "/gerunds-infinitives":
        return 2;

      case "/family-members":
      case "/the-classroom":
      case "/activities":
      case "/the-weather":
        return 3;

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

  const handleVocabularyClick = (event) => {
    setVocabularyAnchorEl(event.currentTarget);
  };

  const handleVocabularyMenuClose = () => {
    setVocabularyAnchorEl(null);
  };

  const handleFamilyMembersClick = () => {
    handleVocabularyMenuClose();
    navigate("/family-members");
  };

  const handleTheClassroomClick = () => {
    handleVocabularyMenuClose();
    navigate("/the-classroom");
  };

  const handleActivitiesClick = () => {
    handleVocabularyMenuClose();
    navigate("/activities");
  };

  const handleTheWeatherClick = () => {
    handleVocabularyMenuClose();
    navigate("/the-weather");
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
              menuOpen
                ? "pronunciation-menu"
                : undefined
            }
            aria-haspopup="true"
            aria-expanded={
              menuOpen
                ? "true"
                : undefined
            }
          />

          <Tab
            label="Gerunds & Infinitives"
            component={NavLink}
            to="/gerunds-infinitives"
          />

          <Tab
            label="Vocabulary Cards"
            onClick={handleVocabularyClick}
            aria-controls={
              vocabularyMenuOpen
                ? "vocabulary-menu"
                : undefined
            }
            aria-haspopup="true"
            aria-expanded={
              vocabularyMenuOpen
                ? "true"
                : undefined
            }
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

        <Menu
          id="vocabulary-menu"
          anchorEl={vocabularyAnchorEl}
          open={vocabularyMenuOpen}
          onClose={handleVocabularyMenuClose}
        >

          <MenuItem onClick={handleFamilyMembersClick}>
            Family Members
          </MenuItem>

          <MenuItem onClick={handleTheClassroomClick}>
            The Classroom
          </MenuItem>

          <MenuItem onClick={handleActivitiesClick}>
            Activities
          </MenuItem>

          <MenuItem onClick={handleTheWeatherClick}>
            The Weather
          </MenuItem>

        </Menu>

      </Box>
    </div>
  );
};

export default Navbar;
