import React from "react";

import styles from "@/styles/themecard.module.css";

export default function ThemeCard({ item }) {
  return (
    <div className={styles.themeCard__container}>
      <div className={styles.img__container}>
        <img src={item.themeBackgroundImage} loading="lazy" alt="" />
      </div>
      <div className={styles.description}>
        <h2 className={styles.name}>{item.themeTitle}</h2>
        <div className={styles.category}>
          {item.themeCategories.map((category, i) => (
            <div>{category}</div>
          ))}
        </div>
      </div>
      <p style={{marginTop: "10px"}}>{item.themeDescription}</p>
    </div>
  );
}
