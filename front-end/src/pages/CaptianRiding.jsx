import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../Components/FinishRide";

const CaptianRiding = () => {
  const [finishRidePanel,setFinishedRidePanel]=useState(false)
  const finishRidePanelRef=useRef()
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen ">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img src="./logo.png" alt="" className="w-16" />
        <Link
          to="/home"
          className=" h-10 w-10 flex items-center justify-center rounded-full  bg-white"
        >
          <i className="ri-logout-box-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/5 p-6 bg-yellow-400 items-center justify-between flex relative"
      onClick={()=>{
        setFinishedRidePanel(true)
      }}>
        <h5 className="p-3 text-center absolute top-0  w-[90%] text-3xl text-gray-300">
          <i className="ri-arrow-up-wide-line text-gray-400"></i>
        </h5>
        <h4 className="text-xl font-semibold">4Km away</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-8 rounded-lg ">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed bottom-0 z-10 px-3  w-full py-10 bg-white pt-12 translate-y-full h-screen"
      >
        <FinishRide
        />
      </div>
    </div>
  );
};

export default CaptianRiding;
