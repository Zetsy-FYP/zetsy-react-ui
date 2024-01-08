"use client";
import { googleSignIn } from "@/utils/authentication";
import "../../styles/registerStore.scss";
import { useForm } from "react-hook-form";
import React from "react";
import GoogleSignBtn from "@/components/GoogleSignBtn";
import EmailSignBtn from "@/components/EmailSignBtn";
import { useRouter } from "next/navigation";



export default function page() {
  const [signUpMode, setSignUpMode] = React.useState(false);
  const [signupwithemail, setSignUpWithEmail] = React.useState(false);
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    handleSubmit,
    watch,
  } = useForm();

  const handleFormSubmit = async (data) => {
    console.log(data);
    const res = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push("/admin");
    }
  };

  return (
    <div className="   w-full min-h-screen h-full flex items-center justify-center ">
      <div className="max-w-xl w-full shadow-card px-5 py-3 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl">Zetsy.</h1>
        </div>
        {!signUpMode ? (
          <div>
            <h1>Log in</h1>
            <p className=" text-[#ADADAD]">Continue to Zetsy</p>
          </div>
        ) : (
          <div>
            <h1>Create a Zetsy Account</h1>
            <p className=" text-[#ADADAD]">
              One last step before starting your business on zetsy
            </p>
          </div>
        )}

        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {!signUpMode && !signupwithemail ? (
            <>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className=" text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" py-1 px-1"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors?.email ? (
                  <span className=" text-red-500">
                    {errors?.email?.message}
                  </span>
                ) : null}
              </div>
              <EmailSignBtn
                type={"button"}
                setterFn={setSignUpMode}
                isDirty={isDirty}
                isValid={isValid}
              />
              <div className="flex justify-center">
                <span className=" inline-block">
                  <hr />
                </span>
                <p>Or</p>
                <span className=" inline-block">
                  <hr />
                </span>
              </div>
              <div>
                <GoogleSignBtn clickhandler={googleSignIn} />
              </div>
            </>
          ) : (
            <>
              <button
                className=" flex items-center justify-center bg-[#EBEBEB] py-2 gap-1"
                onClick={() => {
                  setSignUpWithEmail(true);
                }}
              >
                <i className="ri-mail-line"></i>
                SignUp with email
              </button>
              <GoogleSignBtn clickhandler={googleSignIn} />
            </>
          )}
          {signupwithemail ? (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={getValues("email")}
                  readOnly
                  className=" px-1 py-1"
                />
              </div>
              <div className="flex gap-1">
                <div className="flex flex-col gap-1 flex-1">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "It is a required field",
                    })}
                    className=" px-1 py-1"
                  />
                </div>
                <div className=" flex flex-col gap-1 flex-1">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: "It is a required field",
                    })}
                    className=" px-1 py-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className=" px-1 py-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "password doesnot match";
                      }
                    },
                  })}
                  className=" px-1 py-1"
                />
              </div>
              <div>
                <button
                  className="createAccBtn flex justify-center px-1 py-2 w-full disabled:text-white"
                  disabled={!isDirty || !isValid}
                  type="submit"
                >
                  Create Zetsy Account
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
