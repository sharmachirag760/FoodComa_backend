const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true,"First Name is required"],
        minlength : [3,"First Name must be atleast 3 characters long"],
        lowercase : true,
        trim : true,
        maxlength : [20,"First Name should not exceed 20 characters"]
    },
    lastName : {
        type : String,
        minlength : [3,"Last Name must be atleast 3 characters long"],
        lowercase : true,
        trim : true,
        maxlength : [20,"Last Name should not exceed 20 characters"]
    },
    mobileNumber : {
        type : String,
        required : [true,"mobile number is mandatory"],
        trim : true,
        unique : [true,"number is already in use"],
        minlength : [10,"phone number should be of 10 digits"],
        maxlength : [10,"phone number should be of 10 digits"]
    },
    email : {
        type : String,
        trim : true,
        required : [true,"email is mandatory"],
        unique : [true,"email already in use"],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : [true,"password should be filled"],
        minlength : [6,"password must be atleast 6 characters long"]
    },
    role : {
        type : String,
        enum : ["USER","ADMIN"],
        default : "USER"
    }
},{
    timestamps : true
})
userSchema.pre('save',async function (){
    const hashedPassword = await bcrypt.hash(this.password,10);
    this.password = hashedPassword;
})

const User = mongoose.model("User",userSchema);
module.exports = User;