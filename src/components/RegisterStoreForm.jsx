"use client";
import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { Box, MobileStepper } from "@mui/material";
import { googleSignIn } from "@/utils/authentication";
import { auth } from "../../firebase";
import Link from "next/link";
import "../styles/registerStore.scss";
import { useRouter } from "next/navigation";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function RegisterStoreForm({ Inputs }) {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [user, setUser] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({});

  const handleFormSubmit = (data) => {
    if (activeStep === 1) {
      setActiveStep((prev) => prev + 1);
    } else if (activeStep === 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      setActiveStep((prev) => prev + 1);
    }
    if (activeStep === 3) {
      window.open("http://dashboard.zetsy.com/", "_blank");
    }
  };

  console.log(user);

  // React.useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser("");
  //       // logged Out
  //     }
  //   });
  // }, []);

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <div className="   w-full min-h-screen h-full flex items-center justify-center ">
      <div className="max-w-xl w-full shadow-card px-5 py-3 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl">Zetsy.</h1>
          <Button
            className="flex items-center justify-center w-fit min-w-0"
            variant="outlined"
          >
            <Link href="/">
              <i className="ri-close-line"></i>
            </Link>
          </Button>
        </div>
        <Box sx={{ width: "100%" }}>
          <MobileStepper
            variant="progress"
            steps={4}
            position="static"
            activeStep={activeStep}
          />
        </Box>
        {activeStep === 0 ? (
          <div className=" flex flex-col gap-1">
            <h2>Let&apos;s get to know you before we get started.</h2>
            <p className="text-md font-light">
              It will be easier for us to setup your store
            </p>
          </div>
        ) : null}
        {activeStep === 1 ? (
          <div className="flex flex-col gap-1">
            <h2>What would you like to name your store?</h2>
            <p className="text-md font-light">
              You can always change this later on
            </p>
          </div>
        ) : null}
        {activeStep === 2 ? (
          <div>
            <h2>Little More about yourself</h2>
            <p className="text-md font-light">
              Will be easier for us to reach out to you
            </p>
          </div>
        ) : null}
        {activeStep === 3 ? (
          <div>
            <h2>Let&apos;s create your Zetsy Account</h2>
            <p className="text-md font-light">Link with your google account</p>
          </div>
        ) : null}
        <div className="flex flex-col gap-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            // onSubmit={handleSubmit(handleFormSubmit)}
            // className="flex flex-col gap-2"
          >
            {activeStep === 0
              ? Inputs.map((input, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type={input.type}
                        name={input.name}
                        id={input._id}
                        defaultChecked={index === 0}
                        {...register("options", { required: false })}
                        value={input.value}
                      />
                      <label htmlFor={input._id}>{input.label}</label>
                    </div>
                  );
                })
              : null}
            {activeStep === 1 ? (
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <label htmlFor="storeName">Your Store Name</label>
                  <input
                    type="text"
                    placeholder="eg:Zetsy"
                    name="storeName"
                    id="storeName"
                    {...register("storeName", {
                      required: false,
                    })}
                    className="py-1 px-1"
                  />
                  {errors?.storeName ? (
                    <span className="error">
                      {" "}
                      <em>{errors.storeName.message}</em>{" "}
                    </span>
                  ) : null}
                </div>
                {/* <div className="flex flex-col gap-1">
                  <label htmlFor="category">Category</label>
                  <select name="category" id="category" autoComplete="off">
                    <option value="">Choose a category</option>
                    <hr />
                    {options.map((option) => {
                      return (
                        <option value={option.value}>{option.label}</option>
                      );
                    })}
                  </select>
                  {errors?.category ? (
                    <span className="error">
                      <em>{errors.category.message}</em>
                    </span>
                  ) : null}
                </div> */}
              </div>
            ) : null}
            {activeStep === 2 ? (
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="eg:Suraj Gaire"
                    {...register("fullName", {
                      required: false,
                    })}
                    className="px-1 py-1"
                  />
                  {errors?.fullName ? (
                    <span className="error">
                      <em>{errors.fullName.message}</em>
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="eg: 9869200000"
                    {...register("phoneNumber", {
                      required: false,
                    })}
                    className=" px-1 py-1"
                  />
                </div>
                {errors?.phoneNumber ? (
                  <span className="error">
                    <em>{errors.phoneNumber.message}</em>
                  </span>
                ) : null}
              </div>
            ) : null}
            {/* {activeStep === 3 ? (
              <div>
                <button
                  className="flex justify-center bg-primary text-secondary gap-1 w-full py-[6px]"
                  onClick={() => googleSignIn()}
                >
                  <p>
                    <i className="ri-google-line"></i>
                  </p>
                  Continue with Google
                </button>
              </div>
            ) : null} */}
            <div className="flex justify-between py-2">
              <div className="flex justify-start">
                {activeStep >= 1 ? (
                  <Button className=" max-h-8 h-full" onClick={handleBack}>
                    Back
                  </Button>
                ) : null}
              </div>
              <div className="flex justify-end">
                <button
                  className=" bg-black text-white px-2 rounded max-h-8 h-full"
                  onClick={handleSubmit(handleFormSubmit)}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
