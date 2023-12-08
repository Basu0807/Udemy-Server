const mongoose =require('mongoose')
const validator=require('validator')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name'],
        maxLength:[30,"Name should not exceed 30 character"],
        minLength:[4,"Name should have atleast 4 character"]
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        validate:[validator.isEmail,"Please Enter a valid Email"]
    },
    password:{
        type:String,
        required:[true,'please enter your password'],
        minLength:[4,"Password should have atleast 8 character"],
    
    },
    phone:{
type:Number,
minLength:[10,"Number should have 10 digits"],
maxLength:[10,"Number is not valid "],

    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

    


})

module.exports=mongoose.model("UdemyUser",UserSchema)