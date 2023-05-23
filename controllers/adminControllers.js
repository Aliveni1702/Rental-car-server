const admin = require('../models/adminModel')

const jwt = require('jsonwebtoken')

const createToken = (_id) => {   
    return jwt.sign({_id } , process.env.SECRET, {expiresIn : '3d'})
 }
 
 
 const loginAdmin = async (req,res) => {
     const {email, password} = req.body
     try {
         if(email && password){
            const user = await admin.login(email,password)
            const token = createToken(admin._id)
            res.status(200).json({email, token})
         }
         else{
            res.status(401).json({error : 'Incorrect details'})
         }
      }
      catch(error){
         res.status(400).json({error  : error.message})
      }
     
 }
 

 const signUpAdmin = async (req, res) => {
     const {email, password } = req.body;
     
     try {
        const user = await admin.signup(email,password)
        const token = createToken(admin._id)
        res.status(200).json({email, token}) 
     }
     catch(error){
        res.status(400).json({error  : error.message})
     }
 }
 
 module.exports = {
     loginAdmin,
     signUpAdmin
 }