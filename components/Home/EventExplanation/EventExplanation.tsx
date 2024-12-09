import React from "react";
import EventExplanationText from "./EventExplanationText";
import GridImageDisplayingComp from "./GridImageDisplayingComp";

const EventExplanation = () => {
  return (
    <div className="w-full h-[25.5rem]  flex-between mt-24">
      <GridImageDisplayingComp />
      <EventExplanationText />
    </div>
  );
};

export default EventExplanation;
