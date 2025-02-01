import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const CaptianSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName,setFirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [userData, setUserData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email: email,
      password: password,
    });   
    
    await axios.post("htt")
    setEmail("")
    setpassword("")
    setFirstName("")
    setlastName("")
  };
  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="./logo.png" alt="" />
        <form action="" onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">Whats's our captian's name</h3>
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
              required
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">Whats's our captian's email</h3>
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
          <button
            className="bg-[#111]  text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg placeholder:text-base cursor-pointer"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">
            ALready have an Account?{" "}
            <Link to="/captian-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[14px] leading-tight">
          This site is PRotected by reCPATCHA and the <span className="underline"> Google Ploicy </span>
          and
          <span className="underline"> Terms of Services apply</span>
        </p>
      </div>
    </div>
  );
}

export default CaptianSignUp