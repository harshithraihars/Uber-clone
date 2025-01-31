const BlackListToken = require("../models/blackListToken.model");
const captianModel = require("../models/captian.model");
const createCaptian = require("../service/catian.service");
const { validationResult } = require("express-validator");
module.exports.registerCaptian = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  }
  const { firstName, lastName, email, password, vehicle } = req.body;
  const isUserAlreadyExist = await captianModel.findOne({ email });
  if (isUserAlreadyExist) {
    return res.status(400).json({ msg: "User Already Exist" });
  }
  const hashedPassword = await captianModel.hashPassword(password);
  try {
    const captian = await createCaptian({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    const token = captian.geneateToken();
    res.status(201).json({ token, captian });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports.loginCaptian = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  }
  try {
    const {email,password} = req.body;
    const captian=await captianModel.findOne({email}).select("+password")
    if(!captian){
      return res.status(401).json({msg:"Invalid Email"})
    }
    const ismatch=await captian.comparePassword(password)
    if(!ismatch){
      return res.status(401).json({msg:"Invalid Password"})
    }
    const token=captian.geneateToken()
    res.cookie("token",token)
    return res.status(200).json({captian,token})
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports.getCaptianProfile = async (req, res) => {
    return res.status(200).json(req.captian);
}
module.exports.logout = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token
    if (!token) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    try {
        const blackListToken = BlackListToken.create({ token });
        // await blackListToken.save();
        return res.status(200).json({ msg: "Logged Out" });
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
}