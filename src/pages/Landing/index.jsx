import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Button } from "@mui/material";

import "./styles/style.css";
import landingBanner from "../../assets/landing.mp4";
import Spring from "../../assets/spring.png";
import SpringR from "../../assets/spring-r.png";

export default function Landing() {
  return (
    <div className="landing__container">
      <Helmet>
        <title>Zetsy | Your all-in-one solution for online retail.</title>
      </Helmet>

      <video
        data-aos="fade-up"
        className="landing__banner"
        src={landingBanner}
        autoPlay
        loop
        muted
      />

      <div className="landing__introduction">
        <h1 data-aos="fade-up">
          "Unleash the full potential of your online presence with{" "}
          <span>Zetsy</span>. Let us be the guiding star that leads your
          business to success in the digital realm."
        </h1>

        <p className="star">*</p>

        <p data-aos="fade-up" className="description">
          Welcome to <span>Zetsy</span> - the ultimate destination for online
          presence! <span>Zetsy</span> is a platform designed to bring together
          the best of ecommerce and business, with a focus on personalized
          experiences and unique products. Our marketplace connects buyers and
          sellers, making it easy to find the perfect product and for retailers
          to reach a wider audience. <br />
          <br />
        </p>

        <p data-aos="fade-up" className="description">
          At <span>Zetsy</span>, we believe that every item has a story to tell,
          and we're committed to helping our customers discover the narrative
          behind each piece. So why wait? Come explore our platform and discover
          the perfect product to add to your collection today!
          <br />
          <br />
        </p>

        <p data-aos="fade-up" className="description">
          Each product tells a story on <span>Zetsy</span>.<br />
          This is chapter one, <b>Retails</b>.
        </p>

        <motion.div
        data-aos="fade-up"
          initial={{ gap: "10px" }}
          whileHover={{ gap: "25px" }}
          className="joinZetsy"
        >
          <p>let's zetsy started!</p> <i className="ri-arrow-right-line"></i>
        </motion.div>
      </div>

      <div className="landing__services">
        <h1 data-aos="fade-right">Zetsy's Inventory</h1>

        <div className="services__container">
          <div data-aos="fade-up" className="service">
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
          <div data-aos="fade-up" data-aos-delay="50" className="service">
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
          <div data-aos="fade-up" data-aos-delay="100" className="service">
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
          <div data-aos="fade-up" data-aos-delay="150" className="service">
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
          <div data-aos="fade-up" data-aos-delay="200" className="service">
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
          <div data-aos="fade-up" data-aos-delay="150" className="service">
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
        <h1 data-aos="fade-up">Zetsy's Projects</h1>
        <p data-aos="fade-up">
          Transforming ideas into reality - Our portfolio showcases the power of
          <br />
          innovation and creativity at Zetsy.
        </p>
        <Marquee data-aos="fade-left" speed={35} pauseOnHover={true}>
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
        <Marquee data-aos="fade-right" speed={35} pauseOnHover={true} direction="right">
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
        <Marquee data-aos="fade-left" speed={35} pauseOnHover={true}>
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

        <Button data-aos="fade-up">Browse All Projects</Button>
      </div>

      <div className="landing__zetsyForWho">
        <span className="title">start, scale, and save</span>

        <div className="forWho__container">
          <div data-aos="fade-right" className="firstLevelChild">
            <h1>
              Management and Online Presence is timely and expensive – we'll
              help with both.
            </h1>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="firstLevelChild">
            <div className="flex">
              <div data-aos="fade-up">
                <h1>Individual</h1>
                <p>
                  Customisable, and clear options you can manage yourself.
                  Streamline your back office.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div data-aos="fade-up">
                <h1>Business</h1>
                <p>
                  Scale effortlessly, with domestic and international benefits.
                  Sell to every buyer, everywhere.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div data-aos="fade-left" className="freelancers">
              <h1>Startups</h1>
              <p>An easy gateway to cover your team. Your store, your way.</p>
              <img
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="landing__subscribeBusiness">
        <div className="title">
          <img data-aos="fade-right" src={Spring} loading="lazy" alt="" />
          <div>
            <h1 data-aos-delay="200" data-aos="fade-up">Grow your business with us.</h1>
            <p data-aos-delay="200" data-aos="fade-up">
              <span>
                If you are looking to sell products locally or internationally,
                we provide you with all the necessary tools.
              </span>
            </p>
            <Button data-aos-delay="200" data-aos="fade-up">Register Your Business</Button>
          </div>
          <img data-aos="fade-left" src={SpringR} loading="lazy" alt="" />
        </div>
      </div>

      <div className="landing__meetTheTeam">
        <h1 data-aos="fade-up">Meet The Team</h1>
        <p data-aos="fade-up">
          Discover the faces and stories behind our brand's success.
          <br /> Meet the Team and gain a deeper understanding of our shared
          mission,
          <br /> diverse backgrounds, and unwavering dedication to delivering
          excellence.
        </p>

        <div className="teamItems">
          <div data-aos="fade-up" className="team">
            <img
              src="https://ik.imagekit.io/jckalabs/Zetsy/Screenshot_from_2023-03-19_23-05-03.png?updatedAt=1679246413143"
              loading="lazy"
              alt=""
            />
            <span>Laxman Rai (Lex)</span>
            <span className="post">Web3 Wizard</span>
            <div className="socialMedias">
              <div>
                <i className="ri-facebook-line"></i>
              </div>
              <div>
                <i className="ri-twitter-line"></i>
              </div>
              <div>
                <i className="ri-linkedin-line"></i>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="team">
            <img
              src="https://ik.imagekit.io/jckalabs/Zetsy/327268592_853679075707120_7819938780839728950_n.jpg?updatedAt=1679246534521"
              loading="lazy"
              alt=""
            />
            <span>Sudeep Mishra (SoDeep)</span>
            <span className="post">Platform Wizard</span>
            <div className="socialMedias">
              <div>
                <i className="ri-facebook-line"></i>
              </div>
              <div>
                <i className="ri-twitter-line"></i>
              </div>
              <div>
                <i className="ri-linkedin-line"></i>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="team">
            <img
              src="https://ik.imagekit.io/jckalabs/Zetsy/57538363.jpeg?updatedAt=1679246673878"
              loading="lazy"
              alt=""
            />
            <span>Suraj Gaire (Gaire)</span>
            <span className="post">Themes Wizard</span>
            <div className="socialMedias">
              <div>
                <i className="ri-facebook-line"></i>
              </div>
              <div>
                <i className="ri-twitter-line"></i>
              </div>
              <div>
                <i className="ri-linkedin-line"></i>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="team">
            <img
              src="https://ik.imagekit.io/jckalabs/Zetsy/Screenshot_from_2023-03-19_23-46-12.png?updatedAt=1679248895986"
              loading="lazy"
              alt=""
            />
            <span>Jessica Singh Shrestha (Jess)</span>
            <span className="post">Finance Manager</span>
            <div className="socialMedias">
              <div>
                <i className="ri-facebook-line"></i>
              </div>
              <div>
                <i className="ri-twitter-line"></i>
              </div>
              <div>
                <i className="ri-linkedin-line"></i>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="team">
            <img
              src="https://ik.imagekit.io/jckalabs/Zetsy/1517277165000.jpeg?updatedAt=1679246736576"
              loading="lazy"
              alt=""
            />
            <span>Nirdesh Acharya Dixit (Neil)</span>
            <span className="post">Growth Hacker</span>
            <div className="socialMedias">
              <div>
                <i className="ri-facebook-line"></i>
              </div>
              <div>
                <i className="ri-twitter-line"></i>
              </div>
              <div>
                <i className="ri-linkedin-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
