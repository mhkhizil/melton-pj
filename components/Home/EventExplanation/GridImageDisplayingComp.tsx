import Image from 'next/image';
import React from 'react';

const GridImageDisplayingComp = () => {
  return (
    <div className="sm-md:w-[37%] w-full h-full grid grid-rows-2 gap-y-4">
      {/* Top Image */}
      <div className="w-full relative h-full row-span-1">
        <Image src={"/Market2.png"} alt="" fill objectFit="cover" className=' rounded-xl' />
      </div>

      {/* Bottom Images with Custom Column Widths */}
      <div className="grid grid-cols-[57%_39%] gap-4 row-span-1 h-full">
        {/* Bottom Left Image */}
        <div className="relative h-full">
          <Image src={"/Market3.png"} alt="" fill objectFit="cover" className=' rounded-xl' />
        </div>

        {/* Bottom Right Image */}
        <div className="relative h-full">
          <Image src={"/Market4.png"} alt="" fill objectFit="cover" className=' rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default GridImageDisplayingComp;
