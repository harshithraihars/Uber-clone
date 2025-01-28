const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
        firstName:{
            type:String,
            required:true,
            minlength:[3,"First name should be atleast 3 characters long"]
        },
        lastName:{
            type:String,
            minlength:[3,"Last name should be atleast 3 characters long"]
        },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        select:false
    },
    socketId:{
        type:String
    }
})
const generateAuthToken=()=>{
    const token=jwt.sign({_id:this._id},process.env.JWT_SCRET)
    return token
}
const comparePassword=async(password)=>{
    return await bcrypt.compare(password,this.password)
}
const hashPassword=async (password)=>{
    return await bcrypt.hash(password,10)
}
const userModel=mongoose.model("User",userSchema)
module.exports={userModel,generateAuthToken,comparePassword,hashPassword};