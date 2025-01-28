const express=require("express")
const router=express.Router()
const {body}=require("express-validator")
const controller=require("../Controllers/user.controller")

router.post("/register",
    // validate the data
    [
    body("email").isEmail().withMessage("Invalid Email"),
    body("firstName").isLength({min:3}).withMessage("sould be atlleast 3 characters long"),
    body("password").isLength({min:6}).withMessage("Atleast 6 characters long"),

],controller.register)
router.get("/register",(req,res)=>{
    res.send("asdjdshdshskj")
})
module.exports=router;
