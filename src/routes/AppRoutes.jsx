import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Vowels } from "../components/pages/Vowels";
import { Consonants } from "../components/pages/Consonants";
import { PhrasalVerbs } from "../components/pages/PhrasalVerbs";
import { GerundsInfinitives } from "../components/pages/GerundsInfinitives";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/phrasal-verbs" replace />}
      />

      <Route
        path="/phrasal-verbs"
        element={<PhrasalVerbs />}
      />

      <Route
        path="/consonants"
        element={<Consonants />}
      />

      <Route
        path="/vowels"
        element={<Vowels />}
      />

      <Route
        path="/gerunds-infinitives"
        element={<GerundsInfinitives />}
      />

      <Route
        path="*"
        element={<Navigate to="/phrasal-verbs" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
