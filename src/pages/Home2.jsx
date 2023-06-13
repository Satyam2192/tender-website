import React from "react";

const TenderCard = ({ heading, subheading }) => {
  return (
    <div className="mx-auto bg-white overflow-hidden rounded-lg ">
      <div className="p-8">
        <div className="uppercase tracking-wide text-xs text-blue-500">
          {heading}
        </div>
        <a
          href="#"
          className="block text-xs leading-tight font-medium text-black hover:underline mt-2"
        >
          {subheading}
        </a>
      </div>
    </div>
  );
};

const Home2 = () => {
  return (
    <>
    <div className="container mx-auto p-4 max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Latest government tenders, online tenders, Public Tender, Bids and
        Tender
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center justify-center">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://www.defenceprocurementinternational.com/Content/Features/Images/defence-tenders-inside.jpg"
            alt="Logo"
          />
          <TenderCard
            heading="Defence Tenders"
            subheading="Tenders from Defence Industries"
          />
        </div>
        <div className="flex items-center  ">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://www.freightender.com/wp-content/uploads/2020/03/coche_def.jpg"
            alt="Logo"
          />
          <TenderCard
            heading="Transport Tenders"
            subheading="Tenders from Transport Industries"
          />
        </div>
        <div className="flex items-center  ">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://electricalengineeringmagazine.co.uk/wp-content/uploads/32[50px]33/shutterstock_1709519638.500x0-is.jpg"
            alt="Logo"
          />
          <TenderCard
            heading="Electrical Tenders"
            subheading="Tenders from Electrical Industries"
          />
        </div>
        <div className="flex items-center  ">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://www.tendersinfo.com/blogs/wp-content/uploads/2017/04/Software-tenders-1024x682.jpeg"
            alt="Logo"
          />
          <TenderCard
            heading="Software Tenders"
            subheading="Tenders from Software Industries"
          />
        </div>
        <div className="flex items-center  ">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://i.pinimg.com/564x/f0/e7/4e/f0e74e703bae19a[50px]363860252733b41.jpg"
            alt="Logo"
          />
          <TenderCard
            heading="Construction Tenders"
            subheading="Tenders from Construction Industries"
          />
        </div>
        <div className="flex items-center  ">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://content.jdmagicbox.com/comp/def_content/digital-printers/shutterstock-1187101078-digital-printers-4-vw57s.jpg"
            alt="Logo"
          />
          <TenderCard
            heading="Printing Tenders"
            subheading="Tenders from Printing Industries"
          />
        </div>
        <div className="flex items-center  ">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://economictimes.indiatimes.com/thumb/msid-65916504,width-[50px]00,height-900,resizemode-4,imgsize-309372/how-the-humble-office-canteen-is-witnessing-a-gastronomic-makeover.jpg?from=mdr"
            alt="Logo"
          />
          <TenderCard
            heading="Canteen Tenders"
            subheading="Tenders from Canteen Industries"
          />
        </div>
        <div className="flex items-center  ">
          <img
            className="h-[50px] w-[50px] rounded-lg object-cover"
            src="https://images.citizenmatters.in/wp-content/uploads/sites/2/2021/02/17[50px]3502/Hyderbad-SolarPanelling-Courtesy-Radhika-Choudary1-Feb-20215.jpeg?strip=all&lossy=1&resize=1024%2C438&ssl=1"
            alt="Logo"
          />
          <TenderCard
            heading="Solar Tenders"
            subheading="Tenders from Solar Industries"
          />
        </div>
        
      </div>
      <div className="flex justify-center m-10"><button className="bg-blue-400 p-3 rounded-lg text-white hover:text-blue-400 hover:bg-white border-[2px]  hover:border-blue-400">View More Tenders Categories</button></div>
      
    </div>
    
    </>
  );
};

export default Home2;
