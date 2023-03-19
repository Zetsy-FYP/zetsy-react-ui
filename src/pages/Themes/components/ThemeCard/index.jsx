import React from "react";

import "./styles/style.css";

export default function ThemeCard() {
  return (
    <div className="themeCard__container">
      <div className="img__container">
      <img
        src="https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2023/02/63efa61e5395a543322595.png"
        loading="lazy"
        alt=""
      />
      </div>
      <div className="description">
        <h2 className="name">Active Theory</h2>
        <div className="category">
          <div>Fashion</div>
          <div>Shoes</div>
        </div>
      </div>
    </div>
  );
}
