const captianModel = require("../models/captian.model");

const createCaptian=async ({firstName,lastName,email,password,color,plate,capacity,vehicleType})=>{
    if(!firstName || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("All Fields Are reqyired")
    }
    const captian=captianModel.create({
        firstName,
        lastName,
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return captian
}
module.exports=createCaptian;