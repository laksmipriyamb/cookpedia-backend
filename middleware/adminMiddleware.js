const jwt = require('jsonwebtoken')

const adminMiddleware = async (req,res,next)=>{
    console.log("inside adminMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.role = jwtResponse.role
            req.payload = jwtResponse.email
            if(jwtResponse.role == "admin"){
                next()
            }else{
                res.status(401).json("Authorization failed!!! Permission denied...")
            }
        }catch(error){
            res.status(401).json("Authorization failed!!! Invalid token")
        }

    }else{
        res.status(404).json("Authorization failed!!! Missing token...")
    }
    
}
module.exports = adminMiddleware