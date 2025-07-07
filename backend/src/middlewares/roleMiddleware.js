const authRoles = (...allowdedRoles) =>{
    return (req,res,next)=>{
       if(!allowdedRoles.includes(req.user.role)){
           res.status(401).json({message:"Access denied"});
       }
       next();
    }
}

module.exports = authRoles