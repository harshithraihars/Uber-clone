const { userModel } = require("../models/user.model");

module.exports.createUser=async ({firstName,lastName,email,password})=>{
    
    if(!firstName || !email || !password){
        throw new Error("All Fields Are reqyired")
    }
    const user=userModel.create({
        firstName,
        lastName,
        email,
        password
    })
    return user;
}