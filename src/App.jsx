import React from "react";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import Cards from "../src/components/ui/Cards";
import Dashboard from "./components/pages/Dashboard";
import Maintenance from "./components/pages/Maintenance";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main>
        <Maintenance />
      </main>
      <Footer />
    </div>
  );
}

export default App;
