import React from "react";

const MeltonLogo = () => {
  const meltonLogo = `w-16 h-16 rounded-full   bg-secondary me-3 flex-center text-[clamp(20px,3.5vw,36px)] leading-9  font-palanquin_dark  font-medium text-white`;
  const meltonText = `font-medium  font-palanquin_dark  text-[clamp(10px,1.8vw,20px)] leading-4  tracking-tight`;
  return (
    <>
      <div className={meltonLogo}>
        <h1>M</h1>
      </div>
      <div className=" w-[48%]">
        <h1 className={meltonText}> Made In Melton</h1>
      </div>
    </>
  );
};

export default MeltonLogo;
