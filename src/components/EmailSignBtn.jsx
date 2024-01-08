import React from "react";

const EmailSignBtn = ({ type, setterFn, isValid, isDirty }) => {
  return (
    <button
      type={type}
      className=" bg-black text-white py-2 flex items-center justify-center gap-1 max-h-10 submitBtn"
      onClick={() => setterFn(true)}
      disabled={!isDirty || !isValid}
    >
      Continue with email
      <p>
        <i className="ri-arrow-right-line"></i>
      </p>
    </button>
  );
};

export default EmailSignBtn;
