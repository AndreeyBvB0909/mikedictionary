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

import { FamilyMembers } from "../components/pages/FamilyMembers";
import { TheClassroom } from "../components/pages/TheClassroom";
import { Activities } from "../components/pages/Activities";
import { TheWeather } from "../components/pages/TheWeather";

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
        path="/family-members"
        element={<FamilyMembers />}
      />

      <Route
        path="/the-classroom"
        element={<TheClassroom />}
      />

      <Route
        path="/activities"
        element={<Activities />}
      />

      <Route
        path="/the-weather"
        element={<TheWeather />}
      />

      <Route
        path="*"
        element={<Navigate to="/phrasal-verbs" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;
