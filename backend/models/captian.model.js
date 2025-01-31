const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { contextsKey } = require("express-validator/lib/base");
const captianSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First name should be atleast 3 characters long"],
  },
  lastName: {
    type: String,
    minlength: [3, "Last name should be atleast 3 characters long"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "color should be atleast 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "plate should be atleast 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [3, "capacity should be atleast 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location:{
    lat:{
        type:Number,
    },
    long:{
        type:Number
    }
  }
});
captianSchema.methods.geneateToken=function(){
    const token=jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:"24H"})
    return token
}
captianSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
captianSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
} 
const captianModel=mongoose.model("captian",captianSchema)
module.exports=captianModel;