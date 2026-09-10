import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Vowels } from "../components/pages/Vowels";
import { PhrasalVerbs } from "../components/pages/PhrasalVerbs";
import { Gerunds } from "../components/pages/Gerunds";
import { Infinitives } from "../components/pages/Infinitives";

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
          path="/gerunds"
          element={<Gerunds />}
        />

        <Route
          path="/infinitives"
          element={<Infinitives />}
        />
      </Routes>
    </section>
  );
};

export default AppRoutes;
