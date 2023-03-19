import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { LazyMotion, domAnimation } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

AOS.init();

createRoot(document.getElementById("root")).render(
  <>
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LazyMotion>
  </>
);
