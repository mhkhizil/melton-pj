import FooterComp from "@/components/Footer/FooterComp";
import NavBarComp from "@/components/NavBar/NavBarComp";
import React, { ReactNode } from "react";
interface NavAndInfoProps {
  children: ReactNode;
}

const NavigationAndInfo: React.FC<NavAndInfoProps> = ({ children }) => {
  return (
    <>
      <NavBarComp />
      {children}
      <FooterComp />
    </>
  );
};

export default NavigationAndInfo;
