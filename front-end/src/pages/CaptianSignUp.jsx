import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CatianContext";
const CaptianSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: plateNumber,
        capacity: capacity,
        vehicleType: vehicleType,
      },
    };

    // await axios.post("htt")

    try{
      const resopnse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captian/register`,
        newUser
      );
      if (resopnse.status === 201) {
        const data = resopnse.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captian-home");
        setEmail("");
        setpassword("");
        setFirstName("");
        setlastName("");
        setVehicleColor("");
        setPlateNumber("");
        setCapacity("");
        setVehicleType("");
      }
    }catch(err){
      console.log(err.message);
    }
  };
  return (
    <div className="py-4 px-5 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-5" src="./logo.png" alt="" />
        <form action="" onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">
            Whats's our captian's name
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              className="bg-[#eeeeee] rounded px-4 py-2  border  w-1/2 text-lg placeholder:text-base"
              required
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#eeeeee] rounded px-4 py-2  border text-lg placeholder:text-base"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">
            Whats's our captian's email
          </h3>
          <input
            type="email"
            className="bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              required
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              required
              placeholder="Plate Number"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              type="number"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              required
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
            <select
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button
            className="bg-[#111] mt-10 text-white font-semibold rounded-lg px-4 py-4 mb-3 w-full text-lg placeholder:text-base cursor-pointer"
            type="submit"
          >
            Create Captian
          </button>
          <p className="text-center mt-5">
            Already have an Account?{" "}
            <Link to="/captian-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[14px] leading-tight">
          This site is Protected by reCPATCHA and the{" "}
          <span className="underline"> Google Ploicy </span>
          and
          <span className="underline"> Terms of Services apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptianSignUp;
