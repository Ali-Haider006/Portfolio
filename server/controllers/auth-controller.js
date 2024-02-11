const bcrypt = require('bcryptjs');
const User = require('../models/user-model');

const home = async(req,res)=>{
    res.status(200).send('Welcome using controller');
    };
const register = async(req,res)=>{
        try {
            // console.log(req.body);
            // res.status(200).send({"msg":req.body});
            const {username, email, phone , password} = req.body;
            const userExist = await User.findOne({email});

            


            if (userExist) {
                return res.status(400).json({msg:"Email already exists"})
            }


            const userCreated = await User.create({username, email, phone , password});
            res.status(201).json({msg:"Message Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString()});
        } catch (error) {
         console.log(error);
        }    };
        

module.exports = {home,register};