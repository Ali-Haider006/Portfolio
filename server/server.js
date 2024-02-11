// import *  as dotenv from 'dotenv';
// const dotenv = require('dotenv');
// dotenv.config();
// console.log(process.env.MONGODB_URI);
const express  = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDb = require('./utils/db');

app.use(express.json());
app.use("/api/auth", router);

// app.get('/', (req,res)=>{
// res.status(200).send('Welcome');
// });

// app.get('/register', (req,res)=>{
//     res.status(200).send('Welcome to Registration Page');
//     });
 
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server is running at ${PORT}`)
    });
})
