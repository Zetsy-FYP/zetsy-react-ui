import { Button } from "@mui/material";
import React, { useState } from "react";

import styles from "@/styles/auth.module.css";
import HomeLayout from "@/layouts/HomeLayout";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { sendUserPasswordResetEmail } from "@/utils/authentication";

export default function Authentication() {
  const [email, setEmail] = useState();
  const router = useRouter();

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    router.push("/auth");
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await sendUserPasswordResetEmail(email);
      toast("Forgot Password mail sent!");
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

          <Button
            onClick={(e) => handleForgot(e)}
            className={styles.authForm__button}
          >
            Forgot Password
          </Button>
        </form>
        <div className={styles.divider}>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className={`${styles.utilities} ${styles.mg_bttm_signup}`}>
          <p>Already have an account?</p>
          <p
            onClick={() => {
              handleNavigation();
            }}
          >
            Login
          </p>
        </div>
      </div>
    </HomeLayout>
  );
}
