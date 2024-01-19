const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller')
// const register = require('../controllers/registration')
// router.get('/', (req,res)=>{
//     res.status(200).send('Welcome using router');
//     });

// router.get('/register', (req,res)=>{
//         res.status(200).send('Welcome to Registration Page using router');
//         });    

router.route("/").get(authController.home);
    
router.route("/register").post(authController.register);    
module.exports = router;