import React from "react";

const ComfirmedReide = ({setvehiclPanelOpen,setVehicleFound,setConfirmRidePanel}) => {
  return (
    <div>
      <h5
        className="p-3 text-center absolute top-0  w-[90%] text-3xl text-gray-300"
        onClick={() => {
          setConfirmRidePanel(false)
        }}
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Your Ride</h3>
      <div className="flex justify-between items-center flex-col gap-2">
        <img className="h-36 " src="./car.png" alt="car image" />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Knakaria Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kadri Park, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">
                <i class="ri-money-rupee-circle-line"></i>193.20
              </h3>
              <p className="text-sm text-gray-600 -mt-1">Cash cash</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
        onClick={()=>{setVehicleFound(true)     
          setConfirmRidePanel(false)     
        }}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ComfirmedReide;
