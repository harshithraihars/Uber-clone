const mongoose=require("mongoose")
const conneectDb=async ()=>{
    await mongoose.connect(process.env.MONGO_URI).catch(err=>console.log(err));
    
}
module.exports=conneectDb;