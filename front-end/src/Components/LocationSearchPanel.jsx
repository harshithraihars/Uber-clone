import React from "react";

const LocationSearchPanel = ({setvehiclPanelOpen,setPanel}) => {
  const sampleLocations = [
    "24B, Near Kapoor's Cafe, Sheriyans Coding School",
    "22B, Near Malhothra's Cafe, A U P S School",
    "10B, Near Singhai's Cafe, Sheriyans Coding School",
    "18B, Near Sharma's Cafe, Sheriyans Coding School",
    "12A, Near Kapoor's Cafe, Sheriyans Coding School",
  ];
  return (
    <div>
      {sampleLocations.map((location,index) => {
        return (
          <div className="flex items-center justify-start gap-4 my-2 border-2 p-3  rounded-xl border-gray-100 active:border-black" 
          onClick={()=>{setvehiclPanelOpen(true)
            setPanel(false)
          }} key={index}>
            <h2 className="bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">
              {location}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
