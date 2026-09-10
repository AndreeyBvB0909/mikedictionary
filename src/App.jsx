import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <Header />
          <Navbar />
        </header>

        <main>
          <Main />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
