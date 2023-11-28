import { Button } from "@mui/material";
import React, { useState } from "react";

import styles from "@/styles/auth.module.css";
import HomeLayout from "@/layouts/HomeLayout";
import { useRouter } from "next/router";
import { userSignUp } from "@/utils/authentication";
import { toast } from "react-toastify";

export default function UserRegistration() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const router = useRouter();

  const handleNavigation = (e) => {
    window.scrollTo(0, 0);
    router.push(e);
  };

  const handleUserRegistration = async (e) => {
    try {
      e.preventDefault();
      if (password === confirmPassword && email) {
        await userSignUp(email, password);
        toast("User Registration Completed!");
      } else {
        toast.error("Password must match!");
      }
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

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />

          <Button
            onClick={(e) => handleUserRegistration(e)}
            className={styles.authForm__button}
          >
            Sign Up
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

        <div className={`${styles.utilities} ${styles.mg_bttm_signup}`}>
          <p>Already have an account?</p>
          <p onClick={() => handleNavigation("/auth")}>Login</p>
        </div>
      </div>
    </HomeLayout>
  );
}
