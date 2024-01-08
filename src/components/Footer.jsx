"use client";
import React from "react";

import styles from "@/styles/footer.module.css";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.footer__container}>
      <p>Zetsy.</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      <p>Copyright &copy; 2023. All Rights Reserved</p>
      <p onClick={() => backToTop()}>(back to top)</p>
    </div>
  );
}
