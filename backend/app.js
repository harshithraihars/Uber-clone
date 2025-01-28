require("dotenv").config()
const cors=require("cors")
const express=require("express");
const cookie=require("cookie-parser")
const router = require("./routes/user.route");
const app=express();
app.use(cors())
app.use(cookie())
app.use(express.json())
app.use("/user",router)
app.get("/",(req,res)=>{
    res.send("hello world")
})
module.exports=app