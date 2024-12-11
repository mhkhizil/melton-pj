import Image from "next/image";
import React from "react";

const MarketImageComp = () => {
  return (
    <div className=" relative w-[32%] h-full">
      <Image
        src={"/Market.png"}
        alt=""
        fill
        objectFit="cover"
        className=" rounded-xl"
      />
    </div>
  );
};

export default MarketImageComp;
