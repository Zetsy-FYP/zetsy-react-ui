import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Themes from "../pages/Themes";

export default function Routers() {
  return (
    <Routes>
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/" element={<Landing/>}/>
      <Route path="themes" element={<Themes/>}/>
    </Routes>
  );
}
