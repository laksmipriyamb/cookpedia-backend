const users = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//register user
exports.registerController = async (req,res)=>{
    console.log("Inside registerController");
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(409).json("User already exist!!! Please login")
        }else{
            const encryptedPassword = await bcrypt.hash(password,10)
            const newUser = await users.create({
                username,email,password:encryptedPassword
            })
            res.status(200).json(newUser)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
}

//login
exports.loginController = async (req,res)=>{
    console.log("Inside loginController");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            let isPasswordMatch = await bcrypt.compare(password,existingUser.password)
            if(isPasswordMatch){
                const token = jwt.sign({email,role:existingUser.role},process.env.JWT_SECRET_KEY)
                res.status(200).json({user:existingUser,token})
            }else{
                res.status(409).json("Incorrect Email/PAssword...")
            }
        }else{
            res.status(409).json("Invalid Email/Password...")
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
}