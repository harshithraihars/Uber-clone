const { validationResult } = require("express-validator")
const { createUser } = require("../service/user.service")
const { userModel, generateAuthToken, hashPassword } = require("../models/user.model")
const register=async (req,res,next)=>{
    // the errors are captured at validatuonRsult
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(404).json({msg:errors.array()})
    }
    const {firstName,lastName,email,password}=req.body;
    const hashedPassword=await hashPassword(password)
    const user=await createUser({
        firstName,
        lastName,
        email,
        password:hashedPassword
    })
    const token=generateAuthToken()
    res.status(201).json({user,token})
}
module.exports={register}