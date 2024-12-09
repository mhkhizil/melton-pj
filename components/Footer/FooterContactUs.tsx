import React from "react";

const FooterContactUs = () => {
  const rubikText = `my-4 tracking-wider  leading-7 font-normal font-rubik text-[clamp(10px,1.8vw,20px)] `;
  const headingText = `my-2 leading-7 font-medium font-palanquin_dark text-[clamp(14px,2.4vw,28px)]`;
  return (
    <div className="flex-cos-s w-[25%] ">
      <div>
        <h1 className={headingText}>Contact Us</h1>
      </div>
      <div>
        <h1 className={rubikText}>84 Barkers Rd, Victoria, 3122 Melbourne</h1>
      </div>
      <div>
        <h1 className={rubikText}>(03) 9853 6638</h1>
      </div>
    </div>
  );
};

export default FooterContactUs;
