import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function HomeLayout({ children }) {
  const [windowWidth, setWindowWidth] = React.useState(0);

  if (process.browser) {
    React.useLayoutEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  }

  return (
    <div>
      <Navbar windowWidth={windowWidth} />
      {children}
      <Footer />
      <ToastContainer />
    </div>
  );
}
