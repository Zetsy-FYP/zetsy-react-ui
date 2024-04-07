import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  // search input validation
  const [inputValue, setInputValue] = useState("");

  const [windowWidth, setWindowWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    function handleScroll() {
      setScrollY(window.scrollY);
    }

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialLogoStyle = {
    fontSize: !isMenuOpened
      ? windowWidth > 576
        ? `${8 - (scrollY >= 148.88 ? 148.88 : scrollY) * 0.04}rem`
        : `${5 - (scrollY >= 148.88 ? 2.5 : scrollY * 0.0125)}rem`
      : windowWidth > 576
      ? `${8 - 148.88 * 0.04}rem`
      : `${5 - 2.5 * 0.0125}rem`,
    top: isMenuOpened
      ? windowWidth > 576
        ? "80px"
        : "55px"
      : windowWidth > 576
      ? `${scrollY >= 140 ? 80 : 80 - (scrollY - 140)}px`
      : `${scrollY >= 80 ? 55 : 23 - (scrollY - 120)}px`,
  };

  const handleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    if (!isMenuOpened) {
      setScrollY(148.88);
    } else {
      setScrollY(window.scrollY);
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleNavigation = (e) => {
    setIsMenuOpened(false);
    window.scrollTo(0, 0);
    router.push(e);
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
            {isMenuOpened ? (
              <i className="ri-close-fill"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
          </Button>

          {/* <Button>
            <i className="ri-search-2-line"></i>
          </Button> */}

          {/* <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          /> */}

          {/* <Button className={styles.borderRight}>
            <i className="ri-map-pin-line"></i>
          </Button> */}

          {/* <Button> */}
          {/* <i className="ri-shopping-cart-line"></i> */}
          {/* </Button> */}
        </div>
        {!isFocused && scrollY !== 148.88 && inputValue === "" && (
          <div className={styles.menu__logo}>
            <h1 style={initialLogoStyle} onClick={() => handleNavigation("/")}>
              Zetsy.
            </h1>
          </div>
        )}

        {isMenuOpened && (
          <div className={styles.menuItems__container}>
            <Button onClick={() => handleNavigation("/themes")}>
              Themes: Your Taste
            </Button>

            <Button onClick={() => handleNavigation("/about")}>About Us</Button>

            <Button>Marketplace</Button>

            <Button onClick={() => handleNavigation("/auth")}>
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
