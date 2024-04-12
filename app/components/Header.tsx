import React, { FC, useState } from "react";
import Link from "next/link";
import NavItems from "./NavItems";


interface Props {
  active: boolean;
  setactive: (active: boolean) => void;
  activeItem: number;
}

const Header: FC<Props> = ({ active, setactive, activeItem }) => {
  const [openSidebar, setOpensidebar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.screenY > 80) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c shadow-xl transition duration-500]"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[9%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <Link href={"/"} passHref>
              <a className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                Learning
              </a>
            </Link>
          </div>

          <div className="flex items-center">
            <NavItems activeItem={activeItem} isMobile={false} /> {/* Using NavItems component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
