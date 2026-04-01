import React, { useState, useContext } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LuSun, LuMoon } from "react-icons/lu";
import { ThemeContext } from "../../context/ThemeContext";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className="flex gap-5 bg-white dark:bg-gray-900 border-b border-gray-200/50 dark:border-gray-700 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
        <button
        className="block lg:hidden text-black dark:text-white"
        onClick={() => {
            setOpenSideMenu(!openSideMenu);
        }}
        >
            {openSideMenu ? (
                <HiOutlineX className="text-2xl" />
            ) : (
                <HiOutlineMenu className="text-2xl" />
            )}
        </button>

        <h2 className="text-lg font-medium text-black dark:text-white">Expense Tracker</h2>

        <div className="ml-auto flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                {darkMode ? <LuSun className="text-xl" /> : <LuMoon className="text-xl" />}
            </button>
        </div>

        {openSideMenu && (
            <div className="fixed top-15.25 -ml-4 bg-white dark:bg-gray-900">
                <SideMenu activeMenu={activeMenu} />
            </div> 
        )}
    </div>
  );
};

export default Navbar;