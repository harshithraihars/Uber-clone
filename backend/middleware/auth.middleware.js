const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { userModel } = require("../models/user.model");
module.exports.authUser=async (req,res,next)=>{
    const token=req.cookies?.token || req.headers.authorization.split(" ")[1]
    console.log(token);
    
    if(!token){
        return res.status(401).json({msg:"Unauthorized no token found"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
                
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