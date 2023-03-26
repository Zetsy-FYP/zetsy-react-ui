import React from "react";
import NoSsr from "@mui/base/NoSsr";

import styles from "@/styles/navbar.module.css";
import { Button } from "@mui/material";

export default function Navbar() {
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

  React.useEffect(() => {
    function handleScroll() {
      setScrollYLogoTransform(
        window.scrollY >= 148.88 ? 148.88 : window.scrollY
      );
      setScrollYLogoMargin(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleNavigation = (e) => {
    setIsMenuCollapsed(false);
    window.scrollTo(0, 0);
    setScrollYLogoTransform(window.scrollY);
    setScrollYLogoMargin(window.scrollY);
    // navigate(e);
  };

  return (
    <div className={styles.navbarHome__container}>
      <div className={`${styles.menuHighlights} ${styles.left}`}>
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
      <div className={styles.menu__container}>
        <div className={styles.menuItems}>
          <Button className={styles.borderRight} onClick={() => handleMenu()}>
            {isMenuCollapsed ? (
              <i className="ri-close-fill"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
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

          <Button className={styles.borderRight}>
            <i className="ri-map-pin-line"></i>
          </Button>

          <Button>
            <i className="ri-shopping-cart-line"></i>
          </Button>
        </div>
        {!isFocused &&
          process.browser &&
          window.scrollY !== 148.88 &&
          inputValue === "" && (
            <div className={styles.menu__logo}>
              <h1
                style={{
                  fontSize:
                    process.browser && window.innerWidth > 576
                      ? `${8 - (scrollYLogoTransform * 2.5) / 60}rem`
                      : `${5 - (scrollYLogoTransform * 2.5) / 120}rem`,
                  top: isMenuCollapsed
                    ? process.browser && window.innerWidth > 576
                      ? "80px"
                      : "55px"
                    : process.browser && window.innerWidth > 576
                    ? `${
                        scrollYLogoMargin >= 140
                          ? 80
                          : 80 - (scrollYLogoMargin - 140)
                      }px`
                    : `${
                        scrollYLogoMargin >= 80
                          ? 55
                          : 23 - (scrollYLogoMargin - 120)
                      }px`,
                }}
              >
                Zetsy.
              </h1>
            </div>
          )}

        {isMenuCollapsed && (
          <div className={styles.menuItems__container}>
            <Button onClick={() => handleNavigation("themes")}>
              Themes: Your Taste
            </Button>

            <Button onClick={() => handleNavigation("about")}>About Us</Button>

            <Button>Marketplace</Button>

            <Button onClick={() => handleNavigation("auth")}>
              Sign In / Register
            </Button>

            <p>Careers</p>
            <p>Roadmap</p>
            <p>Highlighted Projects</p>
            <p>FAQs</p>
            <p>Contact</p>

            <div className={styles.utilities}>
              <div className={styles.firstChild}>
                <div className={styles.darkMode__container}>
                  <div className={styles.circle}></div>
                </div>
                <p>Dark Mode</p>
              </div>
              <div className={styles.firstChild}>
                <i className="ri-settings-4-line"></i>
                <p>Settings</p>
              </div>
            </div>

            <div className={styles.socialMedias}>
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
          </div>
        )}
      </div>
      <div className={`${styles.menuHighlights} ${styles.right}`}>
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
