import React from "react";
import FooterCSS from "../css/Footer.module.css";
import data from "../Data";

function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <div className={FooterCSS.container}>
        <p>{data.FooterText}</p>
        <p style={{ marginTop: "5px", fontSize: "12px" }}>
          Designed by{" "}
          <a
            href="https://github.com/rakshixh"
            style={{ textDecoration: "none", color: "#F4A261" }}
          >
            rakshixh
          </a>
          . Adapted and updated by{" "}
          <a
            href="https://github.com/jcheng95"
            style={{ textDecoration: "none", color: "#F4A261" }}
          >
            jcheng95
          </a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
