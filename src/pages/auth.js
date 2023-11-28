import { Button } from "@mui/material";
import React, { useState } from "react";

import styles from "@/styles/auth.module.css";
import HomeLayout from "@/layouts/HomeLayout";
import { useRouter } from "next/router";
import { userSignIn } from "@/utils/authentication";
import { toast } from "react-toastify";

export default function Authentication() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const handleNavigation = (e) => {
    window.scrollTo(0, 0);
    router.push(e);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await userSignIn(email, password);
      toast("Login Successful!")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeLayout>
      <div className={styles.authentication__controller}>
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <div className={styles.utilities}>
            <p>Must be 8 characters at least.</p>
            <p onClick={() => handleNavigation("/forgot")}>Forgot Password?</p>
          </div>
          <Button
            onClick={(e) => handleLogin(e)}
            className={styles.authForm__button}
          >
            Login
          </Button>
        </form>
        <div className={styles.divider}>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className={styles.socialAuthentications}>
          <Button>
            <i className="ri-google-fill"></i>
          </Button>
        </div>
        <div className={`${styles.utilities} ${styles.mg_bttm}`}>
          <p>Don't have an account?</p>
          <p onClick={() => handleNavigation("/register")}>Create Account</p>
        </div>
      </div>
    </HomeLayout>
  );
}
