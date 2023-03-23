import { Button } from "@mui/material";
import React from "react";

import "./styles/style.css";

export default function Authentication() {
  return (
    <div className="authentication__controller">
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="utilites">
        <p>Must be 8 characters at least.</p>
        <p>Forgot Password?</p>
        </div>
        <Button className="authForm__button">Login</Button>
      </form>
      <p className="divider">OR</p>
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
    </div>
  );
}
