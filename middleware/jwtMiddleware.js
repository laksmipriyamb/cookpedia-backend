const jwt = require('jsonwebtoken')

const jwtMiddleware = async (req,res,next)=>{
    console.log("inside jwtMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.role = jwtResponse.role
            req.payload = jwtResponse.email
            next()

        }catch(error){
            res.status(401).json("Authorization failed!!! Invalid token")
        }

    }else{
        res.status(404).json("Authorization failed!!! Missing token...")
    }
    
}
module.exports = jwtMiddleware