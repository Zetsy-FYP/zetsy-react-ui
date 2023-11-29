import React from "react";

import ThemeCard from "@/components/ThemeCard";
import styles from "@/styles/themes.module.css";
import HomeLayout from "@/layouts/HomeLayout";
import ThemesMock from "@/mocks/Themes.json"

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
          {ThemesMock.map((item, i) => {
            return <ThemeCard item={item} key={i} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
}
