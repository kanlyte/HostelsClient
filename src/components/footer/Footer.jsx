import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <div className="footer-ctr">
      <span style={{ fontWeight: "bold", fontSize: 20 }}>Beacon Web App</span>
      <div>{new Date().getFullYear()} &copy; Kanlyte Technologies</div>
      <div>All Rights Reserved</div>
    </div>
  );
}

export default Footer;
