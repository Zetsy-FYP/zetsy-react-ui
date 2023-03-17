import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import "./styles/style.css";
import landingBanner from "../../assets/landing.mp4";
import { Button } from "@mui/material";

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
          presence! <span>Zetsy</span> is a platform designed to bring together
          the best of ecommerce and business, with a focus on personalized
          experiences and unique products. Our marketplace connects buyers and
          sellers, making it easy to find the perfect product and for retailers
          to reach a wider audience. <br />
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

        <motion.div
          initial={{ gap: "10px" }}
          whileHover={{ gap: "25px" }}
          className="joinZetsy"
        >
          <p>let's zetsy started!</p> <i className="ri-arrow-right-line"></i>
        </motion.div>
      </div>

      <div className="landing__services">
        <h1>Zetsy's Inventory</h1>

        <div className="services__container">
          <div className="service">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="image__container"
            >
              <img
                src="https://images.unsplash.com/photo-1541506618330-7c369fc759b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                alt=""
                loading="lazy"
              />
            </motion.div>
            <span>Design</span>
            <h2>The Power of Customization</h2>
            <p>
              Make it yours: Zetsy empowers your marketplace with limitless
              customization options.
            </p>
          </div>
          <div className="service">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="image__container"
            >
              <img
                src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1495&q=80"
                alt=""
                loading="lazy"
              />
            </motion.div>
            <span>Community</span>
            <h2>Unleashed Collaboration</h2>
            <p>
              Unlock your potential: Unleash the power of collaboration with us.
            </p>
          </div>
          <div className="service">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="image__container"
            >
              <img
                src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                loading="lazy"
              />
            </motion.div>
            <span>Finance</span>
            <h2>Optimized Economics</h2>
            <p>
              Elevate your financial potential: Experience the benefits of
              optimized economics.
            </p>
          </div>
          <div className="service">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="image__container"
            >
              <img
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                loading="lazy"
              />
            </motion.div>
            <span>Analytics</span>
            <h2>Insights that Drive Actions</h2>
            <p>
              See beyond, act ahead: Gain insights that drive actions with us.
            </p>
          </div>
          <div className="service">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="image__container"
            >
              <img
                src="https://images.unsplash.com/photo-1603015269169-225cb700e29a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
                loading="lazy"
              />
            </motion.div>
            <span>Integration</span>
            <h2>Seamless Connections</h2>
            <p>
              Connecting you to what matters: Experience seamless connections
              with us.
            </p>
          </div>
          <div className="service">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="image__container"
            >
              <img
                src="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                loading="lazy"
              />
            </motion.div>
            <span>Streamlined</span>
            <h2>Efficiency at your Fingertips</h2>
            <p>
              Maximizing productivity, minimizing effort: Efficiency at your
              fingertips with us.
            </p>
          </div>
        </div>
      </div>

      <div className="landing__projects">
        <h1>Zetsy's Projects</h1>
        <p>
          Transforming ideas into reality - Our portfolio showcases the power of<br/>
          innovation and creativity at Zetsy.
        </p>
        <Marquee speed={35} pauseOnHover={true}>
          <ul>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
          </ul>
        </Marquee>
        <Marquee speed={35} pauseOnHover={true} direction="right">
          <ul>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
          </ul>
        </Marquee>
        <Marquee speed={35} pauseOnHover={true}>
          <ul>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
            <li>Ditto</li>
            <li>ThriftMyOutfit</li>
          </ul>
        </Marquee>

        <Button>Browse All Products</Button>
      </div>
    </div>
  );
}
