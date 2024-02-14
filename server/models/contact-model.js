const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const ContactSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
});


ContactSchema.methods.generateToken = async function () {
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
const Contact = new mongoose.model("Contacts", ContactSchema);
module.exports = Contact