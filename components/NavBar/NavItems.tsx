import Link from "next/link";
import React, { useState } from "react";

interface NavItemsProps {
  isHorizontal: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ isHorizontal }) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Upcoming Events", href: "/upcoming-events" },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItemStyle = `${
    !isHorizontal && "my-4"
  } cursor-pointer group relative font-medium font-palanquin_dark px-2 md:px-4 lg:px-6 xl:px-8 text-[clamp(14px,2.4vw,28px)] leading-8`;

  return (
    <div className={isHorizontal ? "flex-center" : "flex-cos-s w-[26%]"}>
      {navItems.map((item, index) => (
        <h1
          key={index}
          className={navItemStyle}
          onClick={() => setActiveIndex(index)}
        >
          <Link href={item.href}>
            {item.name}
            <span
              className={`absolute left-7 top-8 w-full h-[4px] bg-secondary transition-transform origin-left ${
                activeIndex === index
                  ? "scale-x-75"
                  : "scale-x-0 group-hover:scale-x-75"
              }`}
            ></span>
          </Link>
        </h1>
      ))}
    </div>
  );
};

export default NavItems;
