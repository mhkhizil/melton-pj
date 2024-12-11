import React from "react";
import EventExplanationText from "./EventExplanationText";
import GridImageDisplayingComp from "./GridImageDisplayingComp";

const EventExplanation = () => {
  return (
    <div className="w-full h-[25.5rem]  flex-1 sm-md:flex-between sm-md:mt-24 sm-md:mb-0 mt-[5rem] mb-[28rem]">
      <GridImageDisplayingComp />
      <EventExplanationText />
    </div>
  );
};

export default EventExplanation;
