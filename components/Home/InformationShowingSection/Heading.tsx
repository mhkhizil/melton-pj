import React from "react";

const Heading = () => {
  const headingText =
    "  font-palanquin_dark font-medium text-[clamp(20px,5.2vw,56px)] leading-[3.5rem] tracking-wider ";
  return (
    <div className=" w-[48%]   flex  items-center justify-start ">
      <h1 className={headingText}>
        Sundays <span className=" text-secondary">Thriving</span> With Locals
      </h1>
    </div>
  );
};

export default Heading;
