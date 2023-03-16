import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";

export default function Routers() {
  return (
    <Routes>
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/" element={<Landing/>}/>
    </Routes>
  );
}
