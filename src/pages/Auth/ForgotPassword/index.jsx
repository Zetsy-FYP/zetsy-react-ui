import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/style.css";

export default function ForgotPassword() {
  const navigation = useNavigate()

  const handleNavigation = () => {
    window.scrollTo(0,0);
    navigation("/auth");
  };
  return (
    <div className="forgotPassword__container">
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Enter OTP" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <Button className="authForm__button">Continue</Button>
        <div className="utilities mg-bttm-forgot">
          <p>Already have an account?</p>
          <p onClick={() => handleNavigation()}>Login</p>
        </div>
      </form>
    </div>
  );
}
