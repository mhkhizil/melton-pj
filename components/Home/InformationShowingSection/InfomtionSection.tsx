import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const InfomtionSection = () => {
  return (
    <div className=" mt-16">
      <Heading />
      <div className=" relative h-[32rem] my-10  w-full">
        <Image fill src={"/Market5.png"} alt="" objectFit="cover" />
      </div>
      <div className=" flex items-center justify-between flex-wrap">
        <div className=" ">
          <h1 className=" text-[clamp(20px,5.2vw,56px)] leading-[4rem]  font-normal font-palanquin_dark  tracking-widest ">
            Over 30+
          </h1>
          <p className=" ps-3 font-rubik  font-normal leading-7 text-[clamp(10px,1.8vw,20px)] ">
            Vendors
          </p>
        </div>
        <div className=" ">
          <h1 className=" text-[clamp(20px,5.2vw,56px)] leading-[4rem]  font-normal font-palanquin_dark  tracking-widest ">
            25K+
          </h1>
          <p className=" font-rubik  font-normal leading-7 text-[clamp(10px,1.8vw,20px)] ">
            Person Attended
          </p>
        </div>
        <div className=" ">
          <h1 className=" text-[clamp(20px,5.2vw,56px)] leading-[4rem]  font-normal font-palanquin_dark  tracking-widest ">
            25K+
          </h1>
          <p className=" font-rubik  font-normal leading-7 text-[clamp(10px,1.8vw,20px)] ">
            Person Attended
          </p>
        </div>
        <div className=" ">
          <h1 className=" text-[clamp(20px,5.2vw,56px)] leading-[4rem]  font-normal font-palanquin_dark  tracking-widest ">
            25K+
          </h1>
          <p className=" font-rubik  font-normal leading-7 text-[clamp(10px,1.8vw,20px)] ">
            Person Attended
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfomtionSection;
