import React from "react";

const ActiveStep = ({ activeStep, heading, paragraph, index }) => {
  {
    activeStep === index ? (
      <div className=" flex flex-col gap-1">
        <h2>{heading}</h2>
        <p className="text-md font-light">{paragraph}</p>
      </div>
    ) : null;
  }
};

export default ActiveStep;
