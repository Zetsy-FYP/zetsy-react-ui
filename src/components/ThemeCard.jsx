import React from "react";

import styles from "@/styles/themecard.module.css";

export default function ThemeCard() {
  return (
    <div className={styles.themeCard__container}>
      <div className={styles.img__container}>
      <img
        src="https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/02/63efa61e5395a543322595.png"
        loading="lazy"
        alt=""
      />
      </div>
      <div className={styles.description}>
        <h2 className={styles.name}>Active Theory</h2>
        <div className={styles.category}>
          <div>Fashion</div>
          <div>Shoes</div>
        </div>
      </div>
    </div>
  );
}