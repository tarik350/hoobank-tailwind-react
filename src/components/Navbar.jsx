import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  return (
    <nav className="flex justify-between items-center py-6 navbar w-full">
      <img className="w-[124px] h-[32px]" src={logo} alt="logo" />
      {/* for large devices */}
      <ul className="list-none hidden  sm:flex justify-end items-center flex-1">
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`font-poppins  text-[16px] 
               cursor-pointer font-normal text-white ${
                 index === navLinks.length - 1 ? "mr-0" : "mr-10"
               }`}
            >
              <a href="#">{link.title}</a>
            </li>
          );
        })}
      </ul>

      {/* nav for mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleMenu ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          alt="menu"
          onClick={() => {
            setToggleMenu((prev) => !prev);
          }}
        />
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } bg-black-gradient p-6  absolute top-20 right-0 min-w-[140px] rounded-xl sidebar `}
        >
          <ul>
            {navLinks.map((link, index) => {
              return (
                <li
                  className={`uppercase flex font-normal font-poppins list-none justify-center items-center py-2 text-white ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-3"
                  }`}
                  key={link.id}
                >
                  <a href="#">{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
