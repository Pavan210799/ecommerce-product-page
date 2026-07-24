import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Headphones",
    "Earbuds",
    "Speakers",
    "Support",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto h-18 px-4 flex items-center justify-between">
        <div className="flex flex-col leading-none cursor-pointer">
            <span className="text-2xl font-black tracking-[0.25em]">
                SONY
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 mt-1">
                Official Store
            </span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-red-600
                after:transition-all
                hover:after:w-full transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center relative w-60 md:ml-5">
          <FiSearch className="absolute left-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        <div className="hidden lg:flex items-center gap-4 text-lg">

            <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer">
                <FiHeart className="text-xl hover:text-red-600 transition" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
                </span>
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer">
                <FiShoppingCart className="text-xl hover:text-red-600 transition" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
                </span>
            </div>
            <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
                <FiUser className="text-xl hover:text-red-600 transition" />
            </div>

            <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:scale-110 transition"
            >
                {darkMode ? (
                <FaSun className="text-yellow-400" />
                ) : (
                <FaMoon className="text-slate-700 dark:text-white" />
                )}
            </button>

            </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">

          <div className="p-4">
            <div className="relative mb-5">
              <FiSearch className="absolute left-3 top-3 text-slate-400 shadow-sm focus:shadow-md" />

              <input
                placeholder="Search..."
                className="w-full rounded-full border py-2 pl-10 pr-4"
              />
            </div>

            <div className="flex flex-col gap-4 font-medium">
              {navItems.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-6">
                <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer">
                    <FiHeart className="text-xl hover:text-red-600 transition" />
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        0
                    </span>
                </div>
                <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer">
                    <FiShoppingCart className="text-xl hover:text-red-600 transition" />
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        0
                    </span>
                </div>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
                    <FiUser className="text-xl hover:text-red-600 transition" />
                </div>
                
                <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:scale-110 transition"
                    >
                    {darkMode ? (
                        <FaSun className="text-yellow-400" />
                    ) : (
                        <FaMoon className="text-slate-700 dark:text-white" />
                    )}
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;