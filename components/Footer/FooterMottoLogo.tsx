import Image from "next/image";
import React from "react";
import MeltonLogo from "../MeltonLogo";

const FooterMottoLogo = () => {
  const mottoText = `pt-2 leading-4  font-rubik  font-normal text-[clamp(8px,1.4vw,16px)]`;
  return (
    <div className="  w-[28%] flex-cos-s">
      <div className=" w-[50%] ">
        <div className=" flex-start pb-2">
          <MeltonLogo />
        </div>
      </div>
      <div>
        <Image
          src={"/Line.png"}
          width={246}
          height={6}
          alt="line for design purpose"
        />
      </div>
      <div>
        <p className={mottoText}>
          We welcome vendors, shoppers & people to our weekly events
        </p>
      </div>
    </div>
  );
};

export default FooterMottoLogo;
