import { Button } from "@mui/material";
import React from "react";

import "./styles/style.css";

export default function NavbarHome() {
  // Logo Dynamic Animation
  const [scrollYLogoTransform, setScrollYLogoTransform] = React.useState(0);
  const [scrollYLogoMargin, setScrollYLogoMargin] = React.useState(0);

  window.addEventListener("scroll", () => {
    setScrollYLogoTransform(window.scrollY >= 148.88 ? 148.88 : window.scrollY);
    setScrollYLogoMargin(window.scrollY);
  });
console.log(window.innerWidth)
  const initialLogoStyle = {
    fontSize: window.innerWidth > 576 ? `${8 - (scrollYLogoTransform * 2.5) / 60}rem`: `${5 - (scrollYLogoTransform * 2.5) / 120}rem`,
    top: window.innerWidth > 576 ? `${scrollYLogoMargin >= 140 ? 80 : 80 - (scrollYLogoMargin - 140)}px` : `${scrollYLogoMargin >= 140 ? 55 : 55 - (scrollYLogoMargin - 110)}px`,
  };

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // search input validation
  const [inputValue, setInputValue] = React.useState("");

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

          <input type="text" onChange={e => setInputValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} />

          <Button className="borderRight">
            <i className="ri-map-pin-line"></i>
          </Button>
          <Button>
            <i className="ri-shopping-cart-line"></i>
          </Button>
        </div>
        {!isFocused && window.scrollY !== 148.88 && inputValue === "" && (
          <div className="menu__logo">
            <h1 style={initialLogoStyle}>Zetsy.</h1>
          </div>
        )}
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
