const express=require("express")
const router=express.Router()
const {body}=require("express-validator")
const controller=require("../Controllers/user.controller")
const { authUser } = require("../middleware/auth.middleware")

router.post("/register",
    // validate the data
    [
    body("email").isEmail().withMessage("Invalid Email"),
    body("firstName").isLength({min:3}).withMessage("sould be atlleast 3 characters long"),
    body("password").isLength({min:6}).withMessage("Atleast 6 characters long"),

],controller.register)

router.post("/login",
    // validate the data
    [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Atleast 6 characters long"),
],controller.loginUser)

router.get("/profile",authUser,controller.getUserProfile)

module.exports=router;
