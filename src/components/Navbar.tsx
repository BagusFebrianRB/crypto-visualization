import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="flex-shrink-0 text-2xl font-bold text-white hover:text-[#efe35c] transition-all duration-300"
          >
            CryptoViz
          </NavLink>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative text-white transition-all duration-300
              after:absolute  after:bg-linear-to-r/oklch after:from-[#ec4899] after:to-[#efe35c] after:w-0 after:content-[''] after:h-1 after:left-0 after:-bottom-1.5 after:rounded-lg after:transition-all after:duration-300 
              hover:after:w-full hover:-translate-y-1
              ${isActive ? "after:w-full font-semibold" : "text-white"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/coins"
              className={({ isActive }) =>
                `relative text-white transition-all duration-300
              after:absolute  after:bg-linear-to-r/oklch after:from-[#ec4899] after:to-[#efe35c] after:w-0 after:content-[''] after:h-1 after:left-0 after:-bottom-1.5 after:rounded-lg after:transition-all after:duration-300 
              hover:after:w-full hover:-translate-y-1
              ${isActive ? "after:w-full font-semibold" : "text-white"}`
              }
            >
              Coins
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative text-[white] transition-all duration-300
              after:absolute after:bg-linear-to-r/oklch after:from-[#ec4899] after:to-[#efe35c] after:w-0 after:content-[''] after:h-1 after:left-0 after:-bottom-1.5 after:rounded-lg after:transition-all after:duration-300 
              hover:after:w-full hover:-translate-y-1
              ${isActive ? "after:w-full font-semibold" : "text-white"}`
              }
            >
              About
            </NavLink>
          </div>

          <NavLink
            to="/"
            className="text-sm font-semibold text-[#1f1f1f] transition-all duration-300 rounded-full
            relative px-5 py-2 bg-linear-to-l/oklch from-[#ec4899] to-[#efe35c]
            overflow-hidden group hover:scale-105 duration-300"
          >
            <span
              className="absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%]
            group-hover:translate-x-[100%] blur-sm transition-transform duration-500"
            ></span>
            <span className="relative z-10">Get Started</span>
          </NavLink>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-indigo-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <a href="/" className="block text-gray-900 hover:text-indigo-600">
            Home
          </a>
          <a
            href="/coins"
            className="block text-gray-900 hover:text-indigo-600"
          >
            Coins
          </a>
          <a
            href="/about"
            className="block text-gray-900 hover:text-indigo-600"
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
}
