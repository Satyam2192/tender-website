import React, { useState } from "react";

const TenderCard = ({ title, deadline, location, referenceNo }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 border-[2px]">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-2">{title}</h2>

        <span className="bg-green-500 text-white font-bold py-1 px-2 rounded mr-2 mb-2 h-8 ml-3">
          Live
        </span>
      </div>
      <p className="text-gray-600 mb-4">Deadline: {deadline}</p>
      <p className="text-gray-600 mb-4">{location}</p>
      <p className="text-gray-600 mb-4">TOT Reference No.: {referenceNo}</p>

      <button className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
        View Details
      </button>
    </div>
  );
};

const tenderData = [
  {
    title:
      "Rehabilitation of 15km Industrial Feeder (Sapele) 15km 33kv Sapele Feeder and 15km 33kv Warri Feeder",
    deadline: "28 Jun 2023",
    location: "Nigeria",
    referenceNo: "84449578",
  },
  {
    title: "Medical Equipment for Hospitals",
    deadline: "27 Jul 2023",
    location: "Albania",
    referenceNo: "84396044",
  },
];

const TenderListingPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFundingAgency, setSelectedFundingAgency] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleFundingAgencyChange = (e) => {
    setSelectedFundingAgency(e.target.value);
  };

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <div className="mx-auto p-4 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="sm:col-span-2 md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">
            Online Tenders, Tenders Website, Bids & Tenders
          </h1>
          {tenderData
            .filter(
              (tender) =>
                selectedRegion === "" ||
                tender.location.includes(selectedRegion)
            )
            .filter(
              (tender) =>
                selectedCountry === "" ||
                tender.location.includes(selectedCountry)
            )
            .filter(
              (tender) =>
                selectedFundingAgency === "" ||
                tender.title.includes(selectedFundingAgency)
            )
            .filter(
              (tender) =>
                selectedProduct === "" || tender.title.includes(selectedProduct)
            )
            .map((tender, index) => (
              <TenderCard key={index} {...tender} />
            ))}
        </div>
        <div className="sm:col-span-1 md:col-span-1">
          <div className="border border-gray-300 p-4 rounded">
            <h2 className="text-lg font-bold mb-2">Filter Tenders</h2>

            <div className="mb-4">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                Region
              </label>
              <select
                id="region"
                name="region"
                value={selectedRegion}
                onChange={handleRegionChange}
                className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <option value="">All Regions</option>
                <option value="Western Africa">Western Africa Tenders</option>
                <option value="Central Africa">Central Africa Tenders</option>
                <option value="Eastern Africa">Eastern Africa Tenders</option>
                <option value="Northern Africa">Northern Africa Tenders</option>
                <option value="Southern Africa">Southern Africa Tenders</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <option value="">All Countries</option>
                <option value="Afghanistan">Afghanistan Tenders</option>
                <option value="Algeria">Algeria Tenders</option>
                <option value="Angola">Angola Tenders</option>
                <option value="Argentina">Argentina Tenders</option>
                <option value="Australia">Australia Tenders</option>
                <option value="Azerbaijan">Azerbaijan Tenders</option>
                <option value="Bahrain">Bahrain Tenders</option>
                <option value="Bangladesh">Bangladesh Tenders</option>
                <option value="Brazil">Brazil Tenders</option>
                <option value="Cambodia">Cambodia Tenders</option>
                {/* Add more countries */}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="fundingAgency"
                className="block text-sm font-medium text-gray-700"
              >
                Funding Agency
              </label>
              <select
                id="fundingAgency"
                name="fundingAgency"
                value={selectedFundingAgency}
                onChange={handleFundingAgencyChange}
                className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <option value="">All Funding Agencies</option>
                <option value="Abu Dhabi Fund for Development (ADFD)">
                  Abu Dhabi Fund for Development (ADFD) Tenders
                </option>
                <option value="Agence Francaise De Development (AFD)">
                  Agence Francaise De Development (AFD) Tenders
                </option>
                <option value="Asian Development Bank (ADB)">
                  Asian Development Bank (ADB) Tenders
                </option>
                <option value="Caribbean Development Bank (CDB)">
                  Caribbean Development Bank (CDB) Tenders
                </option>
                <option value="European Commission">
                  European Commission Tenders
                </option>
                <option value="Inter-American Development Bank">
                  Inter-American Development Bank Tenders
                </option>
                <option value="Islamic Development Bank (ISDB)">
                  Islamic Development Bank (ISDB) Tenders
                </option>
                <option value="World Bank (WB)">World Bank (WB) Tenders</option>
                <option value="World Health Organization (WHO)">
                  {" "}
                  World Health Organization (WHO) Tenders
                </option>

                {/* Add more funding agencies */}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700"
              >
                Tenders By Geo-Political Region
              </label>
              <select
                id="product"
                name="product"
                value={selectedProduct}
                onChange={handleProductChange}
                className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <option value="">All Geo-Political Region</option>
                <option value="Arab World">Arab World Tenders</option>
                <option value="ASEAN">ASEAN Tenders</option>
                <option value="BRICS">BRICS Tenders</option>
                <option value="EU">EU Tenders</option>
                <option value="G20">G20 Tenders</option>
                <option value="Gulf">Gulf Countries Tenders</option>
                <option value="Middle">Middle East Tenders</option>
                <option value="ENA">ENA Tenders</option>
                <option value="AARC">AARC Tenders</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700"
              >
                Tenders By Products
              </label>
              <select
                id="product"
                name="product"
                value={selectedProduct}
                onChange={handleProductChange}
                className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <option value="">All Products</option>
                <option value="Rehabilitation">Rehabilitation Tenders</option>
                <option value="Medical Equipment">
                  Medical Equipment Tenders
                </option>
                <option value="Bank">Bank Tenders</option>
                <option value="Cleaning">Cleaning Tenders</option>
                <option value="Construction">Construction Tenders</option>
                <option value="Defence">Defence Tenders</option>
                <option value="Electrical">Electrical Tenders</option>
                <option value="Security">Security Tenders</option>
                <option value="Transport">Transport Tenders</option>
                <option value="Airport">Airport Tenders</option>
                <option value="CCTV">CCTV Tenders</option>
                <option value="Education">Education Tenders</option>
                <option value="Energy">Energy Tenders</option>
                <option value="Healthcare">Healthcare Tenders</option>
                <option value="HR">HR Tenders</option>
                <option value="Insurance">Insurance Tenders</option>
                <option value="IT">IT Tenders</option>
                <option value="Medical">Medical Tenders</option>
                <option value="Mining">Mining Tenders</option>
                <option value="Oil And Gas">Oil And Gas Tenders</option>
                <option value="Printing">Printing Tenders</option>
                <option value="Solar">Solar Tenders</option>
                <option value="Sports">Sports Tenders</option>
                <option value="Telecom">Telecom Tenders</option>
                <option value="Tourism">Tourism Tenders</option>
                <option value="Training">Training Tenders</option>
                {/* Add more products */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderListingPage;
