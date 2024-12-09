import Image from "next/image";
import React from "react";

const WelcomeTextComp = () => {
  const headingText =
    "text-[clamp(22px,5.6vw,58px)]  leading-[3.5rem] text-background font-palanquin_dark font-medium text";
  const smallText =
    " font-rubik font-semibold  leading-8 text-background text-[clamp(12px,2.2vw,24px)]";
  return (
    <div className=" w-[68%] bg-accent  rounded-e-xl h-full ">
      <div className=" w-[85%] m-10">
        <h1 className={headingText}>
          We welcome vendors to participate in our events
        </h1>
        <Image
          src={"/WhiteLine.png"}
          alt=""
          width={672}
          height={3}
          className=" py-8"
        />
        <p className={smallText}>
          Ready to join our next event? Register now to become a vendor and
          connect with our vibrant community at the Saturday market.
        </p>
      </div>
    </div>
  );
};

export default WelcomeTextComp;
