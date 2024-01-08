import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

export default function RootLayout({ children }) {
  // const [windowWidth, setWindowWidth] = React.useState(0);

  // if (process.browser) {
  //   React.useLayoutEffect(() => {
  //     function handleResize() {
  //       setWindowWidth(window.innerWidth);
  //     }

  //     handleResize();
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  // }

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
