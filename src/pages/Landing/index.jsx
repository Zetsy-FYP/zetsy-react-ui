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
      <video
        className="landing__banner"
        src={landingBanner}
        autoPlay
        loop
        muted
      />

      <div className="landing__introduction">
        <h1>
          "Unleash the full potential of your online presence with{" "}
          <span>Zetsy</span>. Let us be the guiding star that leads your
          business to success in the digital realm."
        </h1>

        <p className="star">*</p>

        <p className="description">
          Welcome to <span>Zetsy</span> - the ultimate destination for online
          presence! <span>Zetsy</span> is a platform designed to bring
          together the best of ecommerce and business, with a focus on
          personalized experiences and unique products. Our marketplace
          connects buyers and sellers, making it easy to find the perfect
          product and for retailers to reach a wider audience. <br />
          <br />
        </p>

        <p className="description">
          At <span>Zetsy</span>, we believe that every item has a story to tell,
          and we're committed to helping our customers discover the narrative
          behind each piece. So why wait? Come explore our platform and discover
          the perfect product to add to your collection today!
          <br />
          <br />
        </p>

        <p className="description">
          Each product tells a story on <span>Zetsy</span>.<br />
          This is chapter one, <b>Retails</b>.
        </p>
      </div>
    </div>
  );
}
