const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const secretKey = process.env.JWT_SECRET;


async function registerUser(req,res){
    let {fullName,email,password} = req.body;
    try{
        const duplicate = await User.find({email});
        if(duplicate && duplicate.lenght > 0){
            return res.status(400).send({message: 'User alreaded registered'});
        }
        let user = new User({fullName,email,password});
        const result = await user.save();
        console.log(result);    

    res.status(201).send({message:'User registered success'});

    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }    
}



async function loginUser(req,res){
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email}); 
        if(!user){
          return res.status(404).send({message:"Authentication failed!"});

        }
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid){
            return res.status(404).send({message:"Yon Entered Wrong Password"}); 
        }

        let token =  jwt.sign({userId:user?._id},secretKey,{expiresIn:'1h'});
        let finalData = {
            userId:user?._id,
            email:user?.email,
            fullName:user?.fullName,
            token  
        }   
        res.send(finalData);

    }catch(err){
       console.log(err); 
       res.status(400).send(err)
    }

}

const AuthController = {
    registerUser,
    loginUser

}
 
module.exports = AuthController;  