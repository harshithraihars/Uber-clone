import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CatianContext";
import axios from "axios";

const CaptianProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain} =
    useContext(CaptainDataContext);

    const [loading,setLoading]=useState(true);
  //   this logic is not efficient since it doent differentiate between user and captian
  // so we can use the profile route to validate the token
  useEffect(() => {
    if (!token) {
      navigate("/captian-login");
    }
  }, [token]);
  axios.get(`${import.meta.env.VITE_BASE_URL}/captian/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response)=>{
    if(response.status === 200){
      setCaptain(response.data.captian);
      setLoading(false)
    }
  }).catch((error)=>{
    console.log(error.message);
    
    localStorage.removeItem("token");
    navigate("/captian-login")
  })
  if(loading){
    return <h1>Loading...</h1>
  }
  return <>{children}</>;
};

export default CaptianProtectedWrapper;
