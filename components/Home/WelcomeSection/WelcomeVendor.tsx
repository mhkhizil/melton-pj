import Image from "next/image";
import React from "react";
import MarketImageComp from "./MarketImageComp";
import WelcomeTextComp from "./WelcomeTextComp";

const WelcomeVendor = () => {
  return (
    <div className=" rounded-xl w-full flex justify-normal items-center h-[22.8rem] my-36">
      <MarketImageComp />
      <WelcomeTextComp />
    </div>
  );
};

export default WelcomeVendor;
