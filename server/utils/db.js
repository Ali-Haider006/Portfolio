const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/mern';
// console.log(URI);

const connectDb = async() =>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successful");
    } catch (error) {
        console.log("connection failed");
        process.exit(0);
    }
}
module.exports = connectDb;