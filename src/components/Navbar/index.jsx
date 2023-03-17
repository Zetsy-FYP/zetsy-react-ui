import { Button } from "@mui/material";
import React from "react";
import { motion, useTransform } from "framer-motion";

import "./styles/style.css";

export default function NavbarHome() {
  const [scrollYLogoTransform, setScrollYLogoTransform] = React.useState(0);
  const [scrollYLogoMargin, setScrollYLogoMargin] = React.useState(0);

  console.log(scrollYLogoTransform);

  window.addEventListener("scroll", () => {
    setScrollYLogoTransform(
      window.scrollY >= 148.88 ? 148.88 : window.scrollY
    );
    setScrollYLogoMargin(window.scrollY);
  });

  const initialLogoStyle = {
    fontSize: `${8 - (scrollYLogoTransform * 2.5) / 60}rem`,
    top: `${scrollYLogoMargin >= 140 ? 80 : 80 - (scrollYLogoMargin - 140)}px`,
  };

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
        <div className="menuItems">
          <Button className="borderRight">
            <i className="ri-menu-line"></i>
          </Button>
          <Button>
            <i className="ri-search-2-line"></i>
          </Button>

          <input type="text" />

          <Button className="borderRight">
            <i className="ri-map-pin-line"></i>
          </Button>
          <Button>
            <i className="ri-shopping-cart-line"></i>
          </Button>
        </div>
        <div className="menu__logo">
          <motion.h1 style={initialLogoStyle}>Zetsy.</motion.h1>
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
