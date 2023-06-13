import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
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

        <div className="flex justify-center mt-8">
          <h1 className="text-3xl font-bold  mt-2">Tenders Categories</h1>
          <div className="ml-4 grid gap-4 sm:flex">
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              Region
            </button>
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              Geo-Political
            </button>
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              Country
            </button>
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              Sector
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <h1 className="text-3xl font-bold mt-2">Tenders By Keyword</h1>
          <div className="ml-4 grid gap-4 sm:flex">
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              Financiers
            </button>
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              Authority
            </button>
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              State
            </button>
            <button className="bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
              City
            </button>
          </div>
          <button className="ml-4 bg-[#63ACE5] hover:bg-white hover:border-[#63ACE1] hover:text-black text-white py-3 px-8 rounded-lg shadow-lg transition-colors">
            Free Tenders
          </button>
        </div>

        <div className="flex flex-wrap justify-center mt-10 sm:mt-[100px]">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <div className="bg-white  rounded-lg py-6 px-4 text-center shadow-lg mx-2">
              <p className="text-4xl font-bold ">45,000+</p>
              <p className="text-gray-700">New Tenders Per Day</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <div className="bg-white  rounded-lg py-6 px-4 text-center shadow-lg mx-2">
              <p className="text-4xl font-bold ">25+</p>
              <p className="text-gray-700">Years Of Experience</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <div className="bg-white  rounded-lg py-6 px-4 text-center shadow-lg mx-2">
              <p className="text-4xl font-bold ">240</p>
              <p className="text-gray-700">Countries</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <div className="bg-white to-[#ff99cc] rounded-lg py-6 px-4 text-center shadow-lg mx-2">
              <p className="text-4xl font-bold ">10,000+</p>
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
  );
};

export default HomePage;
