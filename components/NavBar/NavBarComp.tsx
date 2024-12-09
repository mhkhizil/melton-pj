import React from "react";
import NavItems from "./NavItems";
import MeltonLogo from "../MeltonLogo";

const NavBarComp = () => {
  
  return (
    <div>
      <div className=" flex-between pt-4">
        <div className="  flex-start w-[15%]">
          <MeltonLogo />
        </div>
        <div className="w-[80%]">
          <NavItems isHorizontal={true} />
        </div>
      </div>
    </div>
  );
};

export default NavBarComp;
