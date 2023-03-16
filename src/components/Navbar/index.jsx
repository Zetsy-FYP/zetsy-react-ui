import React from "react";

import "./styles/style.css";

export default function NavbarHome() {
  return (
    <div className="navbarHome__container">
      <div className="menuHighlights left">
        <div>
          <p>Made in</p>
          <h3>Nepal</h3>
        </div>
        <div>
          <p>Socially</p>
          <h3>Responsible</h3>
        </div>
        <div>
          <p>Customer</p>
          <h3>Prioritized</h3>
        </div>
      </div>
      <div className="menu__container">
        
        <div className="menu__logo">
          <h1>Zetsy.</h1>
        </div>
      </div>
      <div className="menuHighlights right">
        <div>
          <p>Easy</p>
          <h3>Integration</h3>
        </div>
        <div>
          <p>Business</p>
          <h3>Streamlined</h3>
        </div>
        <div>
          <p>Since</p>
          <h3>2023</h3>
        </div>
      </div>
    </div>
  );
}
