import { Button } from "@mui/material";
import { AnimatePresence, m } from "framer-motion";
import React from "react";

import "./styles/style.css";

export default function NavbarHome() {
  // Logo Dynamic Animation
  const [scrollYLogoTransform, setScrollYLogoTransform] = React.useState(0);
  const [scrollYLogoMargin, setScrollYLogoMargin] = React.useState(0);

  // search input validation
  const [inputValue, setInputValue] = React.useState("");

  const [isMenuCollapsed, setIsMenuCollapsed] = React.useState(false);
  const handleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
    if (!isMenuCollapsed) {
      setScrollYLogoTransform(148.88);
      setScrollYLogoMargin(148.88);
    } else {
      setScrollYLogoTransform(window.scrollY);
      setScrollYLogoMargin(window.scrollY);
    }
  };

  window.addEventListener("scroll", () => {
    setScrollYLogoTransform(window.scrollY >= 148.88 ? 148.88 : window.scrollY);
    setScrollYLogoMargin(window.scrollY);
  });

  const initialLogoStyle = {
    fontSize:
      window.innerWidth > 576
        ? `${8 - (scrollYLogoTransform * 2.5) / 60}rem`
        : `${5 - (scrollYLogoTransform * 2.5) / 120}rem`,
    top: isMenuCollapsed
      ? window.innerWidth > 576
        ? "80px"
        : "55px"
      : window.innerWidth > 576
      ? `${scrollYLogoMargin >= 140 ? 80 : 80 - (scrollYLogoMargin - 140)}px`
      : `${scrollYLogoMargin >= 80 ? 55 : 23 - (scrollYLogoMargin - 120)}px`,
  };

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="navbarHome__container">
      <div data-aos="fade-right" className="menuHighlights left">
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
        <div data-aos="fade-up" className="menuItems">
          <Button className="borderRight" onClick={() => handleMenu()}>
            <AnimatePresence>
              {isMenuCollapsed ? (
                <m.i
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="ri-close-fill"
                ></m.i>
              ) : (
                <m.i
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="ri-menu-line"
                ></m.i>
              )}
            </AnimatePresence>
          </Button>
          <Button>
            <i className="ri-search-2-line"></i>
          </Button>

          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <Button className="borderRight">
            <i className="ri-map-pin-line"></i>
          </Button>
          <Button>
            <i className="ri-shopping-cart-line"></i>
          </Button>
        </div>
        <AnimatePresence>
        {!isFocused && window.scrollY !== 148.88 && inputValue === "" && (
          <m.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1, duration: 1}} exit={{opacity: 0, scale: 0.9}} className="menu__logo">
            <h1 style={initialLogoStyle}>Zetsy.</h1>
          </m.div>
        )}
        </AnimatePresence>

        {isMenuCollapsed && (
          <m.div className="menuItems__container">
            <Button>Themes: Your Taste</Button>
            <Button>About Us</Button>
            <Button>Marketplace</Button>
            <Button>Sign In / Register</Button>
            <p>Careers</p>
            <p>Roadmap</p>
            <p>FAQs</p>
            <p>Contact</p>

            <div className="utilities">
              <div className="firstChild">
                <div className="darkMode__container">
                  <div className="circle"></div>
                </div>
                <p>Dark Mode</p>
              </div>
              <div className="firstChild">
                <m.i whileHover={{rotate: 90}} className="ri-settings-4-line"></m.i>
                <p>Settings</p>
              </div>
            </div>

            <div className="socialMedias">
              <li>
                <i className="ri-instagram-line"></i>
              </li>
              <li>
                <i className="ri-linkedin-box-line"></i>
              </li>
              <li>
                <i className="ri-facebook-box-line"></i>
              </li>
            </div>
          </m.div>
        )}
      </div>
      <div data-aos="fade-left" className="menuHighlights right">
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
