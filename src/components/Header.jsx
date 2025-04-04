import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import HeaderCSS from "../css/Header.module.css";
import data from "../Data";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={HeaderCSS.container}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 style={{ fontWeight: "800" }}>{data.HeaderTitle}</h1>
      </Link>
      <div className={HeaderCSS.hamburger}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <nav className={`${HeaderCSS.nav} ${menuOpen ? HeaderCSS.navOpen : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects/allThatGlitters" onClick={handleLinkClick}>
              All That Glitters
            </Link>
          </li>
          <li>
            <Link to="/projects/freelance" onClick={handleLinkClick}>
              Freelance Work
            </Link>
          </li>
          <li>
            <Link to="/projects/animations" onClick={handleLinkClick}>
              Animations
            </Link>
          </li>
          <li>
            <Link to="/projects/productionDesign" onClick={handleLinkClick}>
              Production Design
            </Link>
          </li>
          <li>
            <Link to="/projects/theGiftOfLosAngeles" onClick={handleLinkClick}>
              The Gift of Los Angeles
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
