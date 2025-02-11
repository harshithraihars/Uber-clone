import React, {  useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptianDetails from "../Components/CaptianDetails";
import RidePopup from "../Components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../Components/ConfirmRidePopup";

const CaptianHome = () => {
  const [ridePopUpPanel,setridePopUpPanel]=useState(true)
  const [confirmridepopup,setConfirmRidePopuppanel]=useState(false)
  const confirmridepopuppanelref=useRef()
  const ridepopuppanelref=useRef()
  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridepopuppanelref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridepopuppanelref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);
  useGSAP(() => {
    if (confirmridepopup) {
      gsap.to(confirmridepopuppanelref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmridepopuppanelref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmridepopup]);
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img src="./logo.png" alt="" className="w-16" />
        <Link
          to="/home"
          className=" h-10 w-10 flex items-center justify-center rounded-full  bg-white"
        >
          <i className="ri-logout-box-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptianDetails/>
      </div>
      <div
      ref={ridepopuppanelref}
        className="fixed bottom-0 z-10 px-3  w-full py-10 bg-white pt-12 translate-y-full"
      >
        <RidePopup setridePopUpPanel={setridePopUpPanel} setConfirmRidePopuppanel={setConfirmRidePopuppanel}/>
        
      </div>
      <div
      ref={confirmridepopuppanelref}
        className="fixed bottom-0 z-10 px-3  w-full py-10 bg-white pt-12 translate-y-full h-screen"
      >
        <ConfirmRidePopup setridePopUpPanel={setridePopUpPanel} setConfirmRidePopuppanel={setConfirmRidePopuppanel}/>
        
      </div>
    </div>
  );
};

export default CaptianHome;
