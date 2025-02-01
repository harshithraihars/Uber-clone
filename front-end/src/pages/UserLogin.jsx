import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserLogin =() => {
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  const {user,setUser}=useContext(UserDataContext)
  const handleSubmit=async (e)=>{
    e.preventDefault();

    const userData={
      email:email,
      password:password
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,userData)
    if(response.status===200){
      setUser(response.data.user)
      localStorage.setItem("token",response.data.token)
      navigate("/home")
    }
    setEmail("")
    setpassword("")
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="./logo.png" alt="" />
        <form action="" onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">Whats's your email</h3>
          <input
            type="email"
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <button className="bg-[#111]  text-white font-semibold rounded px-4 py-2 mb-3 w-full text-lg placeholder:text-base cursor-pointer"
          type="submit">
            Login
          </button>
          <p className="text-center">New here? <Link to="/signup" className="text-blue-600">Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link 
        to="/captian-login"
        className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded px-4 py-2 mb-7 w-full text-lg placeholder:text-base">Sign in as Captian</Link>
      </div>
    </div>
  );
};

export default UserLogin;
