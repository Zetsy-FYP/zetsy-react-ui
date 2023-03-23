import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/style.css";

export default function Authentication() {
  const [formType, setFormType] = React.useState("login");

  const handleSetFormType = (type) => {
    setFormType(type);
  };

  const navigation = useNavigate();

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    navigation("/forgot");
  };

  return (
    <div className="authentication__controller">
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {formType === "signup" && (
          <input type="password" placeholder="Confirm Password" />
        )}
        <div className="utilities">
          <p>Must be 8 characters at least.</p>
          {formType === "login" && <p onClick={() => handleNavigation()}>Forgot Password?</p>}
        </div>
        <Button className="authForm__button">
          {formType === "login" ? "Login" : "Sign Up"}
        </Button>
      </form>
      <div className="divider">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <div className="socialAuthentications">
        <Button>
          <i className="ri-google-fill"></i>
        </Button>
        <Button>
          <i className="ri-apple-fill"></i>
        </Button>
        <Button>
          <i className="ri-facebook-fill"></i>
        </Button>
      </div>
      {formType === "login" && (
        <div className="utilities mg-bttm">
          <p>Don't have an account?</p>
          <p onClick={() => handleSetFormType("signup")}>Create Account</p>
        </div>
      )}
      {formType === "signup" && (
        <div className="utilities mg-bttm-signup">
          <p>Already have an account?</p>
          <p onClick={() => handleSetFormType("login")}>Login</p>
        </div>
      )}
    </div>
  );
}
