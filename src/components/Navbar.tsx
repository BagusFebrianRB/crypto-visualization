import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState("IDR");
  const [darkMode, setDarkMode] = useState(false);

  const currencies = ["IDR", "USD", "EUR"];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // base class untuk semua navlink
  const navLinkBase = `
    relative text-[#1f1f1f] dark:text-white transition-all duration-300
    after:absolute after:w-0 after:content-[''] after:h-1 after:left-0 after:-bottom-1.5
    after:bg-[#efe35c]
    dark:after:bg-linear-to-r/oklch dark:after:from-[#ec4899] dark:after:to-[#efe35c]
    after:rounded-lg after:transition-all after:duration-300
    hover:after:w-full hover:-translate-y-1
  `;

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="
              flex-shrink-0 text-2xl font-black text-[#1f1f1f] dark:text-white
              hover:text-[#efe35c] dark:hover:text-[#efe35c] transition-all duration-300
            "
          >
            CryptoViz
          </NavLink>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "after:w-full font-semibold" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/coins"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "after:w-full font-semibold" : ""}`
              }
            >
              Coins
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "after:w-full font-semibold" : ""}`
              }
            >
              About
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            {/* Currency switcher */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="
                text-sm font-semibold text-[#1f1f1f] dark:text-white transition-all duration-600 
                rounded-full relative px-5 py-2 
                bg-[#efe35c]
                dark:bg-linear-to-l/oklch dark:from-[#ec4899] dark:to-[#efe35c] 
                overflow-hidden group hover:scale-105
              "
              >
                <span
                  className="
                  absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%]
                  group-hover:translate-x-[100%] blur-sm transition-transform duration-500
                "
                />
                <span className="relative z-10 flex items-center gap-1">
                  {currency}
                  <ChevronDownIcon className="w-4 h-4 stroke-[#1f1f1f] dark:stroke-white" />
                </span>
              </button>

              {/* Dropdown menu */}
              {isCurrencyOpen && (
                <div
                  className="
                  absolute left-0 mt-1 w-20 bg-[#1f1f1f]
                  rounded-lg shadow-lg ring-1 ring-black/5 z-50
                "
                >
                  {currencies.map((cur) => (
                    <button
                      key={cur}
                      onClick={() => {
                        setCurrency(cur);
                        setIsCurrencyOpen(false);
                      }}
                      className="
                      block w-full text-left px-4 py-2 text-sm text-white
                      hover:bg-[#2a2a2a] transition
                    "
                    >
                      {cur}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6  dark:fill-white" />
              ) : (
                <MoonIcon className="w-6 h-6 fill-[#1f1f1f]" />
              )}
            </button>

            {/* Hamburger button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:scale-105 transition-all duration-300 "
              >
                <Bars3Icon className="w-6 h-6 fill-[#1f1f1f] dark:fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 transition-all duration-500 ease-in-out">
          <NavLink
            to="/"
            className="block text-[#1f1f1f] dark:text-white hover:text-[#efe35c]"
          >
            Home
          </NavLink>
          <NavLink
            to="/coins"
            className="block text-[#1f1f1f] dark:text-white hover:text-[#efe35c]"
          >
            Coins
          </NavLink>
          <NavLink
            to="/about"
            className="block text-[#1f1f1f] dark:text-white hover:text-[#efe35c]"
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}
