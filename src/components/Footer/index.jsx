import React from "react";

import "./styles/style.css";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer__container">
      <p>Zetsy.</p>
      <p>Terms & Conditions</p>
      <p>Copyright &copy; 2023</p>
      <p onClick={() => backToTop()}>(back to top)</p>
    </div>
  );
}
