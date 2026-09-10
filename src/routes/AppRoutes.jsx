import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Vowels } from "../components/pages/Vowels";
import { PhrasalVerbs } from "../components/pages/PhrasalVerbs";
import { GerundsInfinitives } from "../components/pages/GerundsInfinitives";

const AppRoutes = () => {
  return (
    <section id="content" className="content">
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/vowels" replace />}
        />

        <Route
          path="/vowels"
          element={<Vowels />}
        />

        <Route
          path="/phrasal-verbs"
          element={<PhrasalVerbs />}
        />

        <Route
          path="/gerunds-infinitives"
          element={<GerundsInfinitives />}
        />
      </Routes>
    </section>
  );
};

export default AppRoutes;