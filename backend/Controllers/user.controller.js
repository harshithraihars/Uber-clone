const { validationResult } = require("express-validator");
const { createUser } = require("../service/user.service");
const {
  userModel,
  hashPassword
} = require("../models/user.model");
const BlackListToken = require("../models/blackListToken.model");

// if get any error next()
const register = async (req, res, next) => {
  // the errors are captured at validatuonRsult
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ msg: errors.array() });
  }
  const { firstName, lastName, email, password } = req.body;
  const userAlreadyExist=await userModel.findOne({email})
  if(userAlreadyExist){
    return res.status(400).json({msg:"User Already Exist"})
  }
  const hashedPassword = await hashPassword(password);
  const user = await createUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ user, token });
};

const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ msg: errors.array() });
  }
  const {email,password}=req.body;
  
//   while creating the model we didnt  select the password so we have to select it
  const user=await userModel.findOne({email}).select("+password")
  if(!user){
    // use status code 401 for unauthorized
        return res.status(401).json({msg:"Invalid Email"})
  }
  const ismatch=await user.comparePassword(password);
  
  if(!ismatch){
    return res.status(401).json({msg:"Invalid Password"})
  }
  const token=user.generateAuthToken();
  res.cookie("token",token)
  return res.status(200).json({user,token})
};

const getUserProfile = async (req, res, next) => {
    return res.status(200).json(req.user);
}

const logout=async (req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1] || req.cookies.token
    // add the token to the blacklist
    await BlackListToken.create({token})
    return res.status(200).json({msg:"Logged out successfully"})
}
module.exports = { register, loginUser,getUserProfile,logout };
