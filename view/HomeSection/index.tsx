import EventExplanation from "@/components/Home/EventExplanation/EventExplanation";
import InfomtionSection from "@/components/Home/InformationShowingSection/InfomtionSection";
import WelcomeVendor from "@/components/Home/WelcomeSection/WelcomeVendor";
import React from "react";

const HomeSection = () => {
  return (
    <div>
      <InfomtionSection/>
      <EventExplanation />
      <WelcomeVendor />

    </div>
  );
};

export default HomeSection;
