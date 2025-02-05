import React from 'react'

const VehiclePanel = ({setvehiclPanelOpen,setConfirmRidePanel}) => {
  return (
    <div>
        <h5
          className="p-3 text-center absolute top-0  w-[90%] text-3xl text-gray-300"
          onClick={() => {
            setvehiclPanelOpen(false);
          }}
        >
          <i className="ri-arrow-down-s-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div
        
          className="flex p-3 items-center justify-between w-full
        border-2 bg-gray-100 border-transparent active:border-black rounded-xl mb-2"
        
        onClick={()=>setConfirmRidePanel(true)}>
          <img className="h-12" src="./car.png" alt="" />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i class="ri-user-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable , Compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">
            <span>
              <i class="ri-money-rupee-circle-line"></i>
            </span>
            193.20
          </h2>
        </div>
        <div
          className="flex p-3 items-center justify-between w-full
        border-2 bg-gray-100 border-transparent active:border-black rounded-xl mb-2"
        onClick={()=>setConfirmRidePanel(true)}
        >
          <img className="h-12" src="./bike.jpg" alt="" />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i class="ri-user-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable , MotorCycle Rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">
            <span>
              <i class="ri-money-rupee-circle-line"></i>
            </span>
            65
          </h2>
        </div>
        <div
          className="flex p-3 items-center justify-between w-full
        border-2 bg-gray-100 border-transparent active:border-black rounded-xl mb-2"
        onClick={()=>setConfirmRidePanel(true)}
        >
          <img className="h-12" src="./auto.webp" alt="" />
          <div className=" w-1/2 ml-2">
            <h4 className="font-medium text-base">
              Auto
              <span>
                <i class="ri-user-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">10 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable Auto rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">
            <span>
              <i class="ri-money-rupee-circle-line"></i>
            </span>
            118.86
          </h2>
        </div>
    </div>
  )
}

export default VehiclePanel