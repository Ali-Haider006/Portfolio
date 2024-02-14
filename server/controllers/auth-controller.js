const bcrypt = require('bcryptjs');
const {User} = require('../models/user-model');
const ContactSchema = require('../models/contact-model');
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
            res.status(201).json({msg:"Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString()});
        } catch (error) {
         console.log(error);
        }    };

        const login = async(req,res)=>{
            try {
                // console.log(req.body);
                // res.status(200).send({"msg":req.body});
                const { email, password} = req.body;    // Credentials received by Login Form
                const userExist = await User.findOne({email});   // fetched the desired email from mongodb
    
                if (!userExist) {
                    return res.status(400).json({msg:"Invalid Credentials"})
                }
                
                const passTrue = await bcrypt.compare(password, userExist.password);
                // const passTrue = userExist.comparePassword(password);
                console.log(password);
                if (passTrue) {
                    res.status(201).json({msg:"Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString()});
                } else {
                    return res.status(400).json({msg:"Invalid email or password"});
                }
                
            } catch (error) {
                next(error);
            }    };

            const contact = async(req,res,next)=>{
                try {
                    // console.log(req.body);
                    // res.status(200).send({"msg":req.body});
                    const { username,email, message} = req.body;    // Credentials received by Login Form
                    const contactCreated = await ContactSchema.create({username, email, message});
                        return res.status(201).json({msg:"Response sent", token: await contactCreated.generateToken(), userId: contactCreated._id.toString()});
                } catch (error) {
                    next(error);
                }    };


module.exports = {home,register,login,contact};