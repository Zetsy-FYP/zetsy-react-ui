import React from "react";
import { Helmet } from "react-helmet";

import "./styles/style.css";

export default function Landing() {
  return (
    <div className="landing__container">
      <Helmet>
        <title>Zetsy | Your all-in-one solution for online retail.</title>
      </Helmet>
      Landing
    </div>
  );
}
