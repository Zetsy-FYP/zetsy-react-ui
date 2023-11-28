import { Button } from "@mui/material";
import React, { useState } from "react";

import styles from "@/styles/auth.module.css";
import HomeLayout from "@/layouts/HomeLayout";
import { useRouter } from "next/router";
import { userSignUp } from "@/utils/authentication";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

export default function UserRegistration() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  console.log(errors);

  const router = useRouter();

  const handleNavigation = (e) => {
    window.scrollTo(0, 0);
    router.push(e);
  };

  const handleUserRegistration = async (data) => {
    try {
      console.log(data)
        await userSignUp(data.email,data.password)
        toast("User Registration Completed!");
      } catch (error) {
        console.log(error);
        toast.error("Password must match!");
    }
  };

  return (
    <HomeLayout>
      <div className={styles.authentication__controller}>
        <form onClick={handleSubmit(handleUserRegistration)}>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />

          <input
            type="password"
            {...register("password",{required:"password is required"})}
            placeholder="Password"
          />

          <input
            type="password"
            {...register("confirmPassword", {
              required: "Password is required",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Password does not match";
                }
              },
            })}
            placeholder="Confirm Password"
          />

          <Button
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
