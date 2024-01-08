"use client";
import { Button } from "@mui/material";
import React from "react";

import styles from "@/styles/auth.module.css";
import { useRouter } from "next/navigation";
import { userSignIn , googleSignIn } from "@/utils/authentication";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form"

export default function Authentication() {
  const router = useRouter();
  const { register , handleSubmit ,formState:{errors} } = useForm()

  const handleNavigation = (e) => {
    window.scrollTo(0, 0);
    router.push(e);
  };

  const handleLogin = async (data) => {
    try {
      await userSignIn(data.email, data.password);
      toast("Login Successful!")
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.authentication__controller}>
        <form onClick={handleSubmit(handleLogin)}>
          <input
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            {...register("email",{required:"Email is required"})}
            placeholder="Email"
          />

          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            {...register("password",{required:"Password is required"})}
            placeholder="Password"
          />

          <div className={styles.utilities}>
            <p>Must be 8 characters at least.</p>
            <p onClick={() => handleNavigation("/forgot")}>Forgot Password?</p>
          </div>
          <Button
            // onClick={(e) => handleLogin(e)}
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
          <Button onClick={googleSignIn} >
            <i className="ri-google-fill"></i>
          </Button>
        </div>
        <div className={`${styles.utilities} ${styles.mg_bttm}`}>
          <p>Don't have an account?</p>
          <p onClick={() => handleNavigation("/register")}>Create Account</p>
        </div>
      </div>
    </>
  );
}
