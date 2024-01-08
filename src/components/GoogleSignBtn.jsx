import React from "react";

const GoogleSignBtn = ({clickhandler}) => {
  return (
    <button
      className="flex items-center justify-center bg-[#EBEBEB] text-black gap-1 w-full py-[6px]"
      onClick={() => clickhandler()}
    >
      <p>
        <i className="ri-google-line"></i>
      </p>
      Continue with Google
    </button>
  );
};

export default GoogleSignBtn;
