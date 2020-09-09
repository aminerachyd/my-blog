import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { BlogHero } from "./components/layout/BlogHero";
import { Footer } from "./components/layout/Footer";
import { Homepage } from "./components/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Items variants */}
      <BlogHero />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
