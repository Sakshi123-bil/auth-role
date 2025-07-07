const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { userName, passWord, role } = req.body;

    if (!userName || !passWord || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(passWord, 10);
    const newUser = new User({ userName, passWord: hashedPassword, role });

    await newUser.save();

    console.log("✅ User registered successfully");
    res.status(201).json({ message: "User is Created" });
  } catch (e) {
    console.error("🔥 Error during registration:", e);
    res.status(500).json({ message: "Something went wrong", error: e.message });
  }
};



const login = async (req,res) =>{
  const {userName , passWord} = req.body;
  const user = await User.findOne({userName});

  if(!user){
    return res.status(404).json({message:"user not found"});
  }

  const isMatched = await bcrypt.compare(passWord , user.passWord);

  if(!isMatched){
    res.status(400).json({message:"Something went wrong"});
  }

  const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
    expiresIn:"1h"
  })

  res.status(200).json({token});
}

module.exports = {register , login};