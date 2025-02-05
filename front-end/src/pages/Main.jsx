import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ComfirmedReide from "../Components/ComfirmedReide";
import LookingForDriver from "../Components/LookingForDriver";
const Main = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const vehiclPanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclPanelOpen, setvehiclPanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const ConfirmPanelRef = useRef(null);
  const [vehicleFound,setVehicleFound]=useState(false)
  const vehiclFoundRef=useRef(null)
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
  useGSAP(() => {
    if (vehiclPanelOpen) {
      gsap.to(vehiclPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclPanelOpen]);
  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(ConfirmPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ConfirmPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehiclFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);
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
            setPanel={setPanel}
            setvehiclPanelOpen={setvehiclPanelOpen}
          />
        </div>
      </div>
      <div
        className="fixed bottom-0 z-10 px-3 translate-y-full w-full py-10 bg-white pt-12"
        ref={vehiclPanelRef}
      >
        <VehiclePanel
          setvehiclPanelOpen={setvehiclPanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div
        className="fixed bottom-0 z-10 px-3 translate-y-full w-full py-6 bg-white pt-12"
        ref={ConfirmPanelRef}
      >
        <ComfirmedReide setvehiclPanelOpen={setvehiclPanelOpen} setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div
        className="fixed bottom-0 z-10 px-3 translate-y-full w-full py-6 bg-white pt-12"
        ref={vehiclFoundRef}
      >
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
    </div>
  );
};

export default Main;
