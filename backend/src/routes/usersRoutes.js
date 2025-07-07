const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const authRoles = require("../middlewares/roleMiddleware");
router.get("/admin",verifyToken,authRoles("admin"),(req,res)=>{
    res.json({message:"Welcome Admin"});
})
router.get("/manager",verifyToken,authRoles("admin" , "manager"),(req,res)=>{
    res.json({message:"Welcome manager"});
})
router.get("/user",verifyToken,authRoles("admin","manager","user"),(req,res)=>{
    res.json({message:"Welcome user"});
})
module.exports = router;