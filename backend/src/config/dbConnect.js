const mongoose = require("mongoose");

const dbConnect = async () =>{
    try{
        await mongoose.connect(process.env.CONECT_TO_DB);
        console.log("DataBase connected ");
    }catch(e){
        console.log(e);
        process.exit(1);
    }
    
}

module.exports = dbConnect;