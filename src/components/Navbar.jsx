import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { FaMoon, FaSun } from "react-icons/fa";
function Navbar({ darkMode, setDarkMode, cartItems, wishlistItems, }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
);
    const wishlistCount = wishlistItems.length;

  const navItems = [
    {
        name: "Headphones",
        path: "/headphones",
    },
    {
        name: "Earbuds",
        path: "/earbuds",
    },
    {
        name: "Support",
        path: "/support",
    },
];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto h-18 px-4 flex items-center justify-between">
        <Link
            to="/"
            className="flex flex-col leading-none"
        >
            <span className="text-2xl font-black tracking-[0.25em] text-slate-900 dark:text-white">
                SONY
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                Official Store
            </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
                <Link
                    key={item.name}
                    to={item.path}
                    className="relative text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-red-600
                    after:transition-all
                    hover:after:w-full transition-colors duration-300"
                >
                    {item.name}
                </Link>
            ))}
        </nav>

        <div className="hidden lg:flex items-center relative w-60 md:ml-5">
          <FiSearch className="absolute left-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        <div className="hidden lg:flex items-center gap-4 text-lg">

            <Link
                to="/wishlist"
                className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
            >
                <FiHeart className="text-xl text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500 transition" />

                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                </span>
            </Link>

            <Link
                to="/cart"
                className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
            >
                <FiShoppingCart className="text-xl text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500 transition" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
                </span>
            </Link>
            <Link
                to="/profile"
                className="w-10 h-10 flex items-center justify-center"
            >
                <FiUser className="text-xl text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500 transition" />
            </Link>

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
          className="lg:hidden text-2xl text-slate-800 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">

          <div className="p-4">
            <div className="relative mb-5">
              <FiSearch className="absolute left-3 top-3 text-slate-400 dark:text-slate-500" />

              <input
                placeholder="Search..."
                className="w-full rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>

            <div className="flex flex-col gap-4 font-medium text-slate-800 dark:text-slate-100">
              {navItems.map((item) => (
                <Link
                    key={item.name}
                    to={item.path}
                    className="relative text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-red-600
                    after:transition-all
                    hover:after:w-full transition-colors duration-300"
                >
                    {item.name}
                </Link>
            ))}
            </div>

            <div className="flex items-center gap-5 mt-6">
                <Link
                    to="/wishlist"
                    className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
                >
                    <FiHeart className="text-xl text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500 transition" />

                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        {wishlistCount}
                    </span>
                </Link>
                <Link
                    to="/cart"
                    className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
                >
                    <FiShoppingCart className="text-xl text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500 transition" />
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                </Link>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
                    <FiUser className="text-xl text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-500 transition" />
                </div>
                
                <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:scale-110 transition-all duration-300"
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