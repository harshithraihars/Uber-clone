import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
const Main = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const vehiclPanelRef=useRef(null)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(() => {
    if (panel) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panel]);
  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclPanelRef.current,{
        transform:"translateY(0)",
      })
    }else{
      gsap.to(vehiclPanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclePanel])
  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute" src="./logo.png" />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            className="absolute top-6 right-6 text-2xl"
            onClick={() => setPanel(false)}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-20 w-1 top-[35%] left-10 bg-gray-500 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-4 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick up location"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              onClick={() => setPanel(true)}
            />
            <input
              className="bg-[#eee] px-12 py-4 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanel(true)}
            />
          </form>
        </div>
        <div className="h-0 bg-white" ref={panelRef}>
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div className="fixed bottom-0 z-10 px-3 translate-y-full w-full py-8 bg-white " ref={vehiclPanelRef}>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div
          className="flex p-3 items-center justify-between w-full
        border-2 bg-gray-100 border-transparent active:border-black rounded-xl mb-2"
        >
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
    </div>
  );
};

export default Main;
