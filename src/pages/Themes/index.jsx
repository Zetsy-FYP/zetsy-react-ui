import React from "react";

import ThemeCard from "./components/ThemeCard";
import "./styles/style.css";

export default function Themes() {
  return (
    <div className="themes__container">
      <div className="searchThemes__container">
        <input type="text" placeholder="Search Essence, Categories, Ingrediants for your awesome Brand..."/>
      </div>
      <div className="themesItems">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
        return (
          <ThemeCard key={i}/>
        );
      })}
      </div>
    </div>
  );
}
