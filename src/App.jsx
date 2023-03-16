import React from "react";
import NavbarHome from "./components/Navbar";
import Routers from "./configs/Routers";

export default function App() {
  // @note isAuthenticated must be a prop of aunthentication context
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <>
      {/* @note if authenticated, navbar else no navbar */}
      {!isAuthenticated ? <NavbarHome /> : null}
      <Routers />
    </>
  );
}
