import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed h-10 w-10 flex items-center justify-center rounded-full right-2 top-2 bg-white">
        <i className="ri-home-4-fill text-lg font-medium"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
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
        </div>
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5">Make a payment</button>
      </div>
    </div>
  );
};

export default Riding;
