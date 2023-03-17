import React from "react";
import { Helmet } from "react-helmet";

import "./styles/style.css";
import landingBanner from "../../assets/landing.mp4";

export default function Landing() {
  return (
    <div className="landing__container">
      <Helmet>
        <title>Zetsy | Your all-in-one solution for online retail.</title>
      </Helmet>
      <video className="landing__banner" src={landingBanner} autoPlay loop muted/>
    </div>
  );
}
