import React from "react";

const RegionItem = ({ heading, items }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-4">{heading}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="text-blue-500 font-medium mt-2">
        <a href="#" className="hover:underline">
          View More
        </a>
      </div>
    </div>
  );
};

const Home4 = () => {
  const regions = [
    {
      heading: "Africa Tenders",
      items: ["Western Africa Tenders", "Central Africa Tenders", "Eastern Africa Tenders"],
    },
    {
      heading: "Asia Tenders",
      items: ["Central Asia Tenders", "Eastern Asia Tenders", "Southern Asia Tenders"],
    },
  ];

  const countries = [
    "Argentina Tenders",
    "Australia Tenders",
    "Austria Tenders",
    "Bahrain Tenders",
    "Belgium Tenders",
    "Brazil Tenders",
    "Bulgaria Tenders",
    "Canada Tenders",
  ];

  const geoPolitical = [
    "APAC Tenders",
    "BRICS Tenders",
    "COMESA Tenders",
    "CIS Tenders",
    "Middle East Tenders",
    "MENA Tenders",
    "SAARC Tenders",
    "Gulf Countries Tenders",
  ];

  const fundingAgencies = [
    "African Devp Bank (AfDB) Tenders",
    "Asian Devp Bank (ADB) Tenders",
    "Caribbean Devp Bank (CDB) Tenders",
    "EBRD Tenders",
    "JICA Tenders",
    "UNDP Tenders",
    "World Bank Tenders",
    "WHO Tenders",
  ];

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 text-[#4a4a68]">Browse Tenders</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <RegionItem heading="REGIONS" items={regions.map((region) => region.heading)} />
        </div>

        <div>
          <RegionItem heading="COUNTRIES" items={countries} />
        </div>

        <div>
          <RegionItem heading="GEO-POLITICAL" items={geoPolitical} />
        </div>

        <div>
          <RegionItem heading="FUNDING AGENCIES" items={fundingAgencies} />
        </div>
      </div>
    </div>
  );
};

export default Home4;
