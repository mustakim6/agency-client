import React, { useState } from "react";
import { motion } from "motion/react"
import assets from "../assets/assets";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <motion.div
    initial={{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}//after animate opacity and  y axis position
    transition={{duration:0.6, ease:"easeOut"}}
    >
      <nav className="backdrop-blur-xl  p-2 dark:bg-gray-900/70 bg-white/50 flex items-center justify-between  px-4 sm:px-12 md:px-24 lg:px-24 xl:px-40 fixed w-full top-0  z-50  ">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alt=""
        /> 
        <ul
          className={`flex gap-5 font-bold sm:text-md text-gray-700 dark:text-white max-sm:min-h-screen  max-sm:fixed ${
            !sideBarOpen
              ? "max-  :w-0 max-sm:hidden"
              : "max-sm:w-60 max-sm:pl-10"
          } top-0 max-sm:h-full bottom-0 right-0 max-sm:flex-col max-sm:pt-20   max-sm:top-10  max-sm:px-2 max-sm:text-gray-100 max-sm:bg-primary sm:items-center`}
        >
          <img
            src={assets.close_icon}
            className="w-4 absolute top-4 right-4 sm:hidden"
            alt=""
            onClick={() => setSideBarOpen(false)}
          />

          <li>
            <a
              onClick={() => setSideBarOpen(false)}
              href="#"
              className="sm:hover:border-b"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setSideBarOpen(false)}
              href="#services"
              className="sm:hover:border-b"
            >
              Services
            </a>
          </li>

          <li>
            <a
              onClick={() => setSideBarOpen(false)}
              href="#our-works"
              className="sm:hover:border-b"
            >
              our Works
            </a>
          </li>
          <li>
            <a
              onClick={() => setSideBarOpen(false)}
              href="#testimonials"
              className="sm:hover:border-b"
            >
              Testimonials
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggleButton theme={theme} setTheme={setTheme}></ThemeToggleButton>

          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt=""
            onClick={() => setSideBarOpen(true)}
            className="w-8 sm:hidden"
          />

          <a
            href="#connect"
            className="flex gap-2 max-sm:hidden px-3 py-1 max-sm;hidden items-center bg-primary text-white rounded-2xl hover:scale-103 transition-all"
          >
            Connect <img src={assets.arrow_icon} alt="" />
          </a>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
