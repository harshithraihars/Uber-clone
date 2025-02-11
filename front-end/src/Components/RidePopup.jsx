import React from "react";

const RidePopup = ({ setridePopUpPanel, setConfirmRidePopuppanel }) => {
  return (
    <div>
      <h5
        className="p-3 text-center absolute top-0  w-[90%] text-3xl text-gray-300"
        onClick={() => {
          setridePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <img
            src="./photo.jpg"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <h2 className="text-lg font-medium">Harshith Rai</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex justify-between items-center flex-col gap-2">
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
              <p className="text-sm text-gray-600 -mt-1">Kadri Park, Bhopal</p>
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
        <div className="flex items-center justify-between w-full">
          <button
            className=" bg-gray-300 text-gray-700 font-semibold p-3 px-8 rounded-lg mt-4"
            onClick={() => {
              setridePopUpPanel(false);
            }}
          >
            Ignore
          </button>
          <button
            className=" bg-green-600 text-white font-semibold p-3 px-8 rounded-lg mt-5"
            onClick={() => {
              setConfirmRidePopuppanel(true);
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopup;
