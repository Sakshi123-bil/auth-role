const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if(authHeader && authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1];
     if(!token){
        res.status(401).json({message:"No token available , Access denied"})
     }
     try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode ;
        next();
     }catch(e){
         res.status(400).json({message:"token is not valid"})
     }
  }else{
    res.status(401).json({message:"No toke , Authorization denired"})
  }
}

module.exports = verifyToken