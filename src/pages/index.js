import React from "react";
import Marquee from "react-fast-marquee";
import { Button } from "@mui/material";

import Spring from "@/assets/spring.png";
import SpringR from "@/assets/spring-r.png";

import HomeLayout from "@/layouts/HomeLayout";
import styles from "@/styles/index.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export async function getServerSideProps(context) {
  return {
    props: {
      title: "Zetsy | The ultimate destination for online presence",
      description:
        "Zetsy is a platform designed to bring together the best of ecommerce and business, with a focus on personalized experiences and unique products.",
      canonical: `https://zetsy.store/`,
      ogImage: "/zetsy_logo_bw.png",
    },
  };
}

const teams = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/codewithsudeep/image/upload/v1686759020/IMG_1896_gxzlmu.jpg",
    title: "Ramesh Singh Saud",
    post: "Project Supervisor",
    icons: [
      {
        id: 1,
        icon: <i className="ri-facebook-fill"></i>,
      },
      {
        id: 2,
        icon: <i className="ri-github-fill"></i>,
      },
    ],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/codewithsudeep/image/upload/v1686759061/Suraj_dgqo2a.jpg",
    title: "Suraj Gaire",
    post: "Full Stack Developer ",
    icons: [
      {
        id: 1,
        icon: <i className="ri-facebook-fill"></i>,
      },
      {
        id: 2,
        icon: <i className="ri-github-fill"></i>,
      },
    ],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/codewithsudeep/image/upload/v1695196149/sarbendra_jag1gp.jpg",
    title: "Sarbendra Sigdel",
    post: "Front-end Developer",
    icons: [
      {
        id: 1,
        icon: <i className="ri-facebook-fill"></i>,
      },
      {
        id: 2,
        icon: <i className="ri-github-fill"></i>,
      },
    ],
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/codewithsudeep/image/upload/v1712379210/diukthcssipgv81qaj01.jpg",
    title: "Shishir Shrestha",
    post: "UI/UX Designer",
    icons: [
      {
        id: 1,
        icon: <i className="ri-facebook-fill"></i>,
      },
      {
        id: 2,
        icon: <i className="ri-github-fill"></i>,
      },
    ],
  },
];

export default function index() {
  const router = useRouter()
  return (
    <HomeLayout>
      <div className={styles.landing__container}>
        <video
          src="/landing.mp4"
          className={styles.landing__banner}
          autoPlay
          loop
          muted
        />

        <div className={styles.landing__introduction}>
          <h1>
            "Unleash the full potential of your online presence with{" "}
            <span>Zetsy</span>. Let us be the guiding star that leads your
            business to success in the digital realm."
          </h1>

          <p className={styles.star}>*</p>

          <p className={styles.description}>
            Welcome to <span>Zetsy</span> - the ultimate destination for online
            presence! <span>Zetsy</span> is a platform designed to bring
            together the best of ecommerce and business, with a focus on
            personalized experiences and unique products. Our marketplace
            connects buyers and sellers, making it easy to find the perfect
            product and for retailers to reach a wider audience. <br />
            <br />
          </p>

          <p className={styles.description}>
            At <span>Zetsy</span>, we believe that every item has a story to
            tell, and we're committed to helping our customers discover the
            narrative behind each piece. So why wait? Come explore our platform
            and discover the perfect product to add to your collection today!
            <br />
            <br />
          </p>

          <p className={styles.description}>
            Each product tells a story on <span>Zetsy</span>.<br />
            This is chapter one, <b>Retails</b>.
          </p>

          <div className={styles.joinZetsy}>
            <Link className=" cursor-pointer underline font-semibold text-[25px]" href={"https://business.zetsy.vercel.app/"} target="_blank">let's zetsy started!</Link> <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className={styles.landing__services}>
          <h1>Zetsy's Inventory</h1>

          <div className={styles.services__container}>
            <div className={styles.service}>
              <div className={styles.image__container}>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1541506618330-7c369fc759b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                  alt=""
                />
              </div>
              <span>Design</span>
              <h2>The Power of Customization</h2>
              <p>
                Make it yours: Zetsy empowers your marketplace with limitless
                customization options.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.image__container}>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1495&q=80"
                  alt=""
                />
              </div>
              <span>Community</span>
              <h2>Unleashed Collaboration</h2>
              <p>
                Unlock your potential: Unleash the power of collaboration with
                us.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.image__container}>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
              <span>Finance</span>
              <h2>Optimized Economics</h2>
              <p>
                Elevate your financial potential: Experience the benefits of
                optimized economics.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.image__container}>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <span>Analytics</span>
              <h2>Insights that Drive Actions</h2>
              <p>
                See beyond, act ahead: Gain insights that drive actions with us.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.image__container}>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1603015269169-225cb700e29a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
              </div>
              <span>Integration</span>
              <h2>Seamless Connections</h2>
              <p>
                Connecting you to what matters: Experience seamless connections
                with us.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.image__container}>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <span>Streamlined</span>
              <h2>Efficiency at your Fingertips</h2>
              <p>
                Maximizing productivity, minimizing effort: Efficiency at your
                fingertips with us.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.landing__projects}>
          <h1>Zetsy's Projects</h1>
          <p>
            Transforming ideas into reality - Our portfolio showcases the power
            of
            <br />
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

          <Button>Browse All Projects</Button>
        </div>

        <div className={styles.landing__zetsyForWho}>
          <span className={styles.title}>start, scale, and save</span>

          <div className={styles.forWho__container}>
            <div className={styles.firstLevelChild}>
              <h1>
                Management and Online Presence is timely and expensive – we'll
                help with both.
              </h1>
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />
            </div>
            <div className={styles.firstLevelChild}>
              <div className={styles.flex}>
                <div>
                  <h1>Individual</h1>
                  <p>
                    Customisable, and clear options you can manage yourself.
                    Streamline your back office.
                  </p>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <h1>Business</h1>
                  <p>
                    Scale effortlessly, with domestic and international
                    benefits. Sell to every buyer, everywhere.
                  </p>
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.freelancers}>
                <h1>Startups</h1>
                <p>An easy gateway to cover your team. Your store, your way.</p>
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.landing__subscribeBusiness}>
          <div className={styles.title}>
            <img loading="lazy" src={Spring} alt="" />
            <div>
              <h1>Grow your business with us.</h1>
              <p>
                <span>
                  If you are looking to sell products locally or
                  internationally, we provide you with all the necessary tools.
                </span>
              </p>
              <Link className=" underline" href={"https://business.zetsy.vercel.app/"} target="_blank">Register Your Business</Link>
            </div>
            <img loading="lazy" src={SpringR} alt="" />
          </div>
        </div>

        <div className={styles.landing__meetTheTeam}>
          <h1>Meet The Team</h1>
          <p>
            Discover the faces and stories behind our brand's success.
            <br /> Meet the Team and gain a deeper understanding of our shared
            mission,
            <br /> diverse backgrounds, and unwavering dedication to delivering
            excellence.
          </p>

          <div
            className={
              "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2"
            }
          >
            {teams.map((team) => {
              return (
                <div className={"flex flex-col gap-1"} key={team.id}>
                  <div className="relative w-[300px] h-[350px]">
                    <Image
                      src={team.image}
                      alt={`team-${team.id}`}
                      fill
                      className=" object-cover object-center"
                    />
                  </div>
                  <p className=" !m-0"> {team.title} </p>
                  <p className=" !m-0">{team.post}</p>
                  <div className={"flex items-center justify-center gap-[10px]"}>
                    {team.icons.map((icon) => {
                      return <div key={icon.id}>{icon.icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
