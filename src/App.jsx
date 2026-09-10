import React from "react";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import Navbar from "../src/components/layout/Navbar";
import Cards from "../src/components/ui/Cards";
import Vowels from "./components/pages/Vowels";
import Maintenance from "./components/pages/Maintenance";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Vowels />
      </main>
      <Footer />
    </div>
  );
}

export default App;
