import React from "react";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";

const HomePage = () => {
  return (
    <>
      <div className="p-4 mx-7xl">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/4">
            <ul className="space-y-2">
              <h1 className="text-2xl font-bold mb-4 text-gray-700">
                Tenders Categories
                <hr className="border-gray-400" />
              </h1>
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By Region</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By Geo-Political</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By Sector</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By Country</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By Keyword</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By Financiers</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By Authority</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By State</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Tenders By City</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
              <li className="p-1 py-2 border-white border-2 hover:border-blue-400">
                <a
                  href="#"
                  className="text-gray-600 hover:underline flex items-center justify-between"
                >
                  <span>Free Tenders</span>
                  <img
                    src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"
                    className="w-5 h-5"
                    alt="Right Arrow"
                  />
                </a>
              </li>
              <hr className="my-2 border-gray-400" />
            </ul>
          </div>
          <div className="w-full md:w-3/4 px-4">
            <div className="py-12 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-center mt-8 sm:mt-12">
                <div className="flex items-center rounded-lg bg-white w-full max-w-ls py-2 mt-5">
                  <input
                    type="text"
                    placeholder="Enter your keyword to search for tenders"
                    className="w-full md:w-2/3 lg:w-full py-2 px-4 border-2 border-[#63ACE5] rounded-l focus:outline-none focus:border-[#63ACE5] bg-transparent text-gray-800 placeholder-gray-400"
                  />
                  <button className=" ml-0 mt- md:mt-0 bg-[#63ACE5] hover:bg-white hover:text-black text-white py-[8px] px-[50px]  shadow-lg transition-colors border-[2px] border-[#63ACE5]">
                    Search
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button className=" ml-0 mr-3  md:ml-2 md:mt-0 text-[#63ACE5] hover:bg-white hover:text-blue-400 py-2 px-2 rounded-lg shadow-lg transition-colors">
                  Advance search
                </button>
              </div>
              <div className="flex flex-wrap justify-center mt-8">
                <div className="p-5 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-6 px-4 text-center shadow-lg">
                    <p className="text-4xl font-bold">45,000+</p>
                    <p className="text-gray-700">New Tenders Per Day</p>
                  </div>
                </div>
                <div className="p-5 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-6 px-4 text-center shadow-lg">
                    <p className="text-4xl font-bold">25+</p>
                    <p className="text-gray-700">Years Of Experience</p>
                  </div>
                </div>

                <div className="p-5 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-6 px-4 text-center shadow-lg">
                    <p className="text-4xl font-bold">240</p>
                    <p className="text-gray-700">Countries</p>
                  </div>
                </div>
                <div className="p-5 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="bg-white rounded-lg py-6 px-4 text-center shadow-lg">
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
      </div>

      <Home2 />
      <Home3 />
      <Home4 />
    </>
  );
};

export default HomePage;
