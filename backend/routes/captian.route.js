const express=require("express")
const router=express.Router()
const {body}=require("express-validator")
const captianControler=require("../Controllers/captian.controller")
const { authCaptian } = require("../middleware/auth.middleware")
router.post("/register",
    // validate the data
    [
    body("email").isEmail().withMessage("Invalid Email"),
    body("firstName").isLength({min:3}).withMessage("sould be atlleast 3 characters long"),
    body("password").isLength({min:6}).withMessage("Atleast 6 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("sould be atlleast 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("sould be atlleast 3 characters long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("capacity should be atleast 1"),
    body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("Invalid vehicle type")

],captianControler.registerCaptian)

router.post("/login",
    // validate the data
    [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Atleast 6 characters long"),
],captianControler.loginCaptian)

router.get("/profile",authCaptian,captianControler.getCaptianProfile)

router.get("/logout",authCaptian,captianControler.logout)
module.exports=router;