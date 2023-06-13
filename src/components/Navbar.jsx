import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-white text-3xl font-bold tracking-wider"
            >
              Tender Website
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-purple-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:bg-purple-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/tenders"
                  className="text-white hover:bg-purple-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                >
                  Tenders
                </Link>
                <Link
                  to="/login"
                  className="text-white hover:bg-purple-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
