const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});
// This pre method is used before saving data in db. This particular example will hash password.
// This keyword means data we are passing through backend using postman. 
userSchema.pre('save', async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    try {
        const saltRound = 10;
        const hash_password = await bcrypt.hash(this.password,saltRound);
        this.password = hash_password;
    } catch (error) {
        next(error);
    }
})

userSchema.methods.generateToken = async function () {
    try {
        return jsonwebtoken.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
        )
    } catch (error) {
        console.error(error);
    }
}

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = new mongoose.model("User", userSchema);
module.exports = {User};