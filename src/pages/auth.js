import { Button } from "@mui/material";
import React from "react";

import styles from "@/styles/auth.module.css";
import HomeLayout from "@/layouts/HomeLayout";

export default function Authentication() {
  const [formType, setFormType] = React.useState("login");

  const handleSetFormType = (type) => {
    setFormType(type);
  };

  //   const navigation = useNavigate();

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    // navigation("/forgot");
  };

  return (
    <HomeLayout>
      <div className={styles.authentication__controller}>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {formType === "signup" && (
            <input type="password" placeholder="Confirm Password" />
          )}
          <div className={styles.utilities}>
            <p>Must be 8 characters at least.</p>
            {formType === "login" && (
              <p onClick={() => handleNavigation()}>Forgot Password?</p>
            )}
          </div>
          <Button className={styles.authForm__button}>
            {formType === "login" ? "Login" : "Sign Up"}
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
          <Button>
            <i className="ri-apple-fill"></i>
          </Button>
          <Button>
            <i className="ri-facebook-fill"></i>
          </Button>
        </div>
        {formType === "login" && (
          <div className={`${styles.utilities} ${styles.mg_bttm}`}>
            <p>Don't have an account?</p>
            <p onClick={() => handleSetFormType("signup")}>Create Account</p>
          </div>
        )}
        {formType === "signup" && (
          <div className={`${styles.utilities} ${styles.mg_bttm_signup}`}>
            <p>Already have an account?</p>
            <p onClick={() => handleSetFormType("login")}>Login</p>
          </div>
        )}
      </div>
    </HomeLayout>
  );
}
