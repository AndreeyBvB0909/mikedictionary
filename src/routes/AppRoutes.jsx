import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <section id="content" className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/vowels" />} />
        <Route path="/vowels" element={<Vowels />} />
      </Routes>
    </section>
    </BrowserRouter>
  );
};

export default AppRoutes;