import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/20 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            🚀 CryptoViz
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-900 hover:text-indigo-600 transition"
            >
              Home
            </a>
            <a
              href="/coins"
              className="text-gray-900 hover:text-indigo-600 transition"
            >
              Coins
            </a>
            <a
              href="/about"
              className="text-gray-900 hover:text-indigo-600 transition"
            >
              About
            </a>
          </div>

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
