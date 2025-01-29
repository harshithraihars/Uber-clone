const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { userModel } = require("../models/user.model");
const BlackListToken = require("../models/blackListToken.model");
module.exports.authUser=async (req,res,next)=>{
    const token=req.cookies?.token || req.headers.authorization?.split(" ")[1]
    
    if(!token){
        return res.status(401).json({msg:"Unauthorized no token found"})
    }
    // check if the token is blacklisted
    const isblacklisted=await BlackListToken.findOne({token})
    console.log(isblacklisted);
    
    // if the token is blacklisted then return unauthorized
    if(isblacklisted){
        return res.status(401).json({msg:"Unauthorized token blacklisted"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
                
        // from the decoded data you can get only the id
        // const user=await userModel.findOne({_id:decoded._id})
        const user=await userModel.findOne({_id:decoded._id})
        req.user=user;
        return next()
    }catch(error){
        console.log(error.message);
        
        return res.status(401).json({msg:"Unauthorized something went wrong"})
    }
}