import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  
  const [loading,setLoading]=useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {setUser}=useContext(UserDataContext)
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response)=>{
    if(response.status === 200){
      setLoading(false)
      setUser(response.data.user)
    }
  }).catch((error)=>{
    console.log(error.message);
    
    localStorage.removeItem("token");
    navigate("/login")
  })
  if(loading){
    return <h1>Loading...</h1>
  }
  return <>{children}</>;
};

export default UserProtectedWrapper;
