import { Button } from "@mui/material";
import React from "react";

import styles from "@/styles/forgot.module.css";
import HomeLayout from "@/layouts/HomeLayout";

export default function ForgotPassword() {
  const handleNavigation = () => {
    window.scrollTo(0, 0);
    // navigation("/auth");
  };
  return (
    <HomeLayout>
      <div className={styles.forgotPassword__container}>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Enter OTP" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <Button className={styles.authForm__button}>Continue</Button>
          <div className={`${styles.utilities} ${styles.mg_bttm_forgot}`}>
            <p>Already have an account?</p>
            <p onClick={() => handleNavigation()}>Login</p>
          </div>
        </form>
      </div>
    </HomeLayout>
  );
}
