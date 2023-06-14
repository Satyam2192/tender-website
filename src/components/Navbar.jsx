import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold tracking-wider text-[#63ace5]">
              Tender Website
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="hover:bg-[#63ace5] text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:bg-[#63ace5] text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md"
                >
                  About
                </Link>
                <Link
                  to="/tenders"
                  className="hover:bg-[#63ace5] text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md"
                >
                  Tenders
                </Link>
                <Link
                  to="/login"
                  className="hover:bg-[#63ace5] text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="sm:hidden ml-6">
              <button
                type="button"
                className="text-gray-600 hover:text-[#63ace5] focus:outline-none"
                onClick={toggleMenu}
              >
                <img
                  src="https://www.svgrepo.com/show/12219/menu.svg"
                  alt="Toggle Menu"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden bg-[#63ace5]">
            <div className="flex flex-col space-y-2 mt-2">
              <Link
                to="/"
                className="hover:bg-purple-700 text-lg font-medium transition-colors duration-300 text-white px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-purple-700 text-lg font-medium transition-colors duration-300 text-white px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/tenders"
                className="hover:bg-purple-700 text-lg font-medium transition-colors duration-300 text-white px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Tenders
              </Link>
              <Link
                to="/login"
                className="hover:bg-purple-700 text-lg font-medium transition-colors duration-300 text-white px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
