import React from "react";

const WaitForDriver = () => {
  return (
    <div>
      <h5
        className="p-3 text-center absolute top-0  w-[90%] text-3xl text-gray-300"
        onClick={() => {}}
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-20 " src="./car.png" alt="car image" />
        <div className="text-right">
          <h2 className="text-lg font-medium">Harshith Rai</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">KL14 X 1233</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col gap-2">
        {/* <img className="h-36 " src="./car.png" alt="car image" /> */}
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
      </div>
    </div>
  );
};

export default WaitForDriver;
