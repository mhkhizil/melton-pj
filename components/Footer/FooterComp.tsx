import React from "react";
import MeltonLogo from "../MeltonLogo";
import Image from "next/image";
import NavItems from "../NavBar/NavItems";
import FooterMottoLogo from "./FooterMottoLogo";
import FooterContactUs from "./FooterContactUs";

const FooterComp = () => {
  return (
    <div className=" container-footer mb-14">
      <div className="py-16 flex-between w-[90%]">
        <FooterMottoLogo />
        <NavItems isHorizontal={false} />
        <FooterContactUs />
      </div>
    </div>
  );
};

export default FooterComp;
