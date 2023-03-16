import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { LazyMotion, domAnimation } from "framer-motion";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LazyMotion>
  </>
);
