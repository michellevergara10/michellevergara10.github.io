import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectsCSS from "../css/Projects.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Projects() {
  const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
      const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
          setShowScroll(false);
        }
      };

      window.addEventListener("scroll", checkScrollTop);
      return () => {
        window.removeEventListener("scroll", checkScrollTop);
      };
    }, [showScroll]);

  return (
    <div>
      <Header />
      <div className={ProjectsCSS.gridContainer}>
        <div className={ProjectsCSS.textWrapper}>
          <h1>Projects that I've worked on</h1>
          <ul>
            <li>
              <Link to="/projects/allThatGlitters">All That Glitters</Link>
            </li>
            <li>
              <Link to="/projects/freelance">Freelance Work</Link>
            </li>
            <li>
              <Link to="/projects/animations">Animations</Link>
            </li>
            <li>
              <Link to="/projects/productionDesign">Production Design</Link>
            </li>
            <li>
              <Link to="/projects/theGiftOfLosAngeles">The Gift of Los Angeles</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      {showScroll && <ScrollToTop />}
    </div>
  );
}

export default Projects;
