import React from "react";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";

const HomePage = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center ">
        <div className="w-1/4 ">
          <ul className="p-4 items-center">
            <h1 className="text-2xl font-bold mb-4">Tenders Categories</h1>
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By Region
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By Geo-Political
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By Sector
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By Country
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By Keyword
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By Financiers
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By Authority
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By State
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Tenders By City
              </a>
            </li>
            <hr className="my-2" />
            <li className="m-2 my-4 hover:bg-blue-100">
              <a href="#" className="text-blue-500 hover:underline">
                Free Tenders
              </a>
            </li>
            <hr className="my-2" />
          </ul>
        </div>
        <div className="w-3/4">
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mt-8 sm:mt-12">
              <div className="flex items-center rounded-lg bg-white w-full max-w-md px-4 py-2 mt-5 shadow-lg">
                <input
                  type="text"
                  placeholder="Enter your keyword to search for tenders"
                  className="w-full py-2 px-4 border-2 border-[#63ACE5] rounded-l focus:outline-none focus:border-[#63ACE5] bg-transparent text-gray-800 placeholder-gray-500"
                />
                <button className="bg-[#63ACE5] text-white py-2 px-6 rounded-r flex items-center">
                  <svg
                    alt="Search Icon"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM18 18l-3.5-3.5"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-10 sm:mt-[100px]">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
                <div className="bg-white rounded-lg py-6 px-4 text-center shadow-lg mx-2">
                  <p className="text-4xl font-bold">45,000+</p>
                  <p className="text-gray-700">New Tenders Per Day</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
                <div className="bg-white rounded-lg py-6 px-4 text-center shadow-lg mx-2">
                  <p className="text-4xl font-bold">25+</p>
                  <p className="text-gray-700">Years Of Experience</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
                <div className="bg-white rounded-lg py-6 px-4 text-center shadow-lg mx-2">
                  <p className="text-4xl font-bold">240</p>
                  <p className="text-gray-700">Countries</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
                <div className="bg-white to-[#ff99cc] rounded-lg py-6 px-4 text-center shadow-lg mx-2">
                  <p className="text-4xl font-bold">10,000+</p>
                  <p className="text-gray-700">Registered Clients</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-[#63ACE5] hover:bg-white hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
                Gem Registration New
              </button>
              <button className="ml-4 bg-[#63ACE5] hover:bg-white hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
                Tenders Database
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <Home2 />
      <Home3 />
      <Home4 />
    </>
  );
};

export default HomePage;
