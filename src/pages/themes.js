import React from "react";

import ThemeCard from "@/components/ThemeCard";
import styles from "@/styles/themes.module.css";
import HomeLayout from "@/layouts/HomeLayout";

export default function Themes() {
  return (
    <HomeLayout>
      <div className={styles.themes__container}>
        <div className={styles.searchThemes__container}>
          <input
            type="text"
            placeholder="Search Essence, Categories, Ingrediants for your awesome Brand..."
          />
        </div>
        <div className={styles.themesItems}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            return <ThemeCard key={i} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
}
