const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller')
const {signupSchema,loginSchema,contactSchema} = require("../validator/auth-validator");
const validator = require("../middleware/validator-middleware");
const authMiddleware = require("../middleware/authMiddleware");
// const register = require('../controllers/registration')
// router.get('/', (req,res)=>{
//     res.status(200).send('Welcome using router');
//     });

// router.get('/register', (req,res)=>{
//         res.status(200).send('Welcome to Registration Page using router');
//         });    

router.route("/").get(authController.home);
    
router.route("/register").post( validator(signupSchema) , authController.register);  
router.route("/login").post(  validator(loginSchema) , authController.login); 
router.route("/contact").post(  validator(contactSchema) , authController.contact);
router.route("/user").get(authMiddleware, authController.user);

module.exports = router;