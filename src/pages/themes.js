import React, { useState } from "react";

import ThemeCard from "@/components/ThemeCard";
import styles from "@/styles/themes.module.css";
import HomeLayout from "@/layouts/HomeLayout";
import ThemesMock from "@/mocks/Themes.json";

export default function Themes() {
  const [searchWord, setSearchWord] = useState("");
  const [filteredList, setFilteredLists] = useState(ThemesMock);

  const handleFilteredList = (e) => {
    setSearchWord(e);
    const filteredItems = ThemesMock.filter((theme) =>
      theme.themeTitle.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredLists(filteredItems);
  };
  return (
    <HomeLayout>
      <div className={styles.themes__container}>
        <div className={styles.searchThemes__container}>
          <input
            type="text"
            placeholder="Search Essence, Categories, Ingrediants for your awesome Brand..."
            value={searchWord}
            onChange={(e) => handleFilteredList(e.target.value)}
          />
        </div>
        <div className={styles.themesItems}>
          {filteredList.map((item, i) => {
            return <ThemeCard item={item} key={i} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
}
