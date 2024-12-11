import React from "react";

const EventExplanationText = () => {
  return (
    <div className=" sm-md:w-[57%] w-full  h-full flex-col items-center py-10">
      <div>
        <h1 className="  font-medium  font-palanquin_dark   leading-[3.5rem] tracking-wider text-[clamp(20px,5.6vw,58px)]">
          30 Nov 2024
        </h1>
      </div>
      <div className=" pt-12">
        <p className=" font-rubik font-normal leading-[2.8rem] text-[clamp(12px,2.4vw,26px)]">
          Our previous market event was a lively celebration of local vendors,
          featuring fresh produce, handmade goods, delicious food, and live
          entertainment, creating a vibrant community atmosphere filled with
          energy and connection.
        </p>
      </div>
    </div>
  );
};

export default EventExplanationText;
