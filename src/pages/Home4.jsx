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
      items: [
        "Western Africa Tenders",
        "Central Africa Tenders",
        "Eastern Africa Tenders",
      ],
    },
    {
      heading: "Asia Tenders",
      items: [
        "Central Asia Tenders",
        "Eastern Asia Tenders",
        "Southern Asia Tenders",
      ],
    },
  ];

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/800px-Flag_of_Austria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1280px-Flag_of_Bahrain.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/800px-Flag_of_Belgium.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1280px-Flag_of_Bulgaria.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
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
    <div className="container mx-auto p-4 max-w-7xl  ">
      <h2 className="text-2xl font-bold mb-4 text-[#4a4a68] ">Browse Tenders</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
        <div className="flex justify-center">
          <RegionItem
            heading="REGIONS"
            items={regions.map((region) => region.heading)}
          />
        </div>

        <div className="flex justify-center">
          <div className="mt-[50px]">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-6 h-auto mb-[16.5px] mr-2"
              />
            ))}
          </div>
          <div>
            <RegionItem heading="COUNTRIES" items={countries} />
          </div>
        </div>

        <div className="flex justify-center">
          <RegionItem heading="GEO-POLITICAL" items={geoPolitical} />
        </div>

        <div className="flex justify-center">
          <RegionItem heading="FUNDING AGENCIES" items={fundingAgencies} />
        </div>
      </div>
    </div>
  );
};

export default Home4;
