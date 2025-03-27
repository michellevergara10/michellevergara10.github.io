import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import About from "./pages/About";
import AllThatGlitters from "./pages/AllThatGlitters";
import Animations from "./pages/Animations";
import Freelance from "./pages/Freelance";
import NotFound from "./pages/NotFound";
import ProductionDesign from "./pages/ProductionDesign";
import Projects from "./pages/Projects";
import TheGiftOfLosAngeles from "./pages/TheGiftOfLosAngeles";

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/allThatGlitters" element={<AllThatGlitters />} />
          <Route path="/projects/animations" element={<Animations />} />
          <Route path="/projects/freelance" element={<Freelance />} />
          <Route path="/projects/productionDesign" element={<ProductionDesign />} />
          <Route path="/projects/theGiftOfLosAngeles" element={<TheGiftOfLosAngeles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
