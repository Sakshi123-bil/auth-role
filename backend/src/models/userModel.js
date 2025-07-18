const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    passWord:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["admin" , "manager" ,"user"],
    }
},{
    timestamps:true
})

module.exports = mongoose.model("user", userSchema);