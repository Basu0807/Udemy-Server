const User =require('../Models/userModel')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken');
const secretkey ="vasu"

const registerController = async (req,res)=>{
    const data =req.body;
    // console.log(data);

    const userdetail = await User.findOne({"email":`${data.email}`})
    if(userdetail){
         return res.send({msg:"User is already registered with this email id. Try to login"})
    }
const hashpassword =bcrypt.hashSync(data.password,10); // some random string+symbol+number+password
// console.log(hashpassword);
 
const userObj={
    name:data.name,
    email:data.email,
    phone:data.phone,
    password:hashpassword
}
     await User.create(userObj)

     const token =jwt.sign({useremail:data.email},secretkey,{expiresIn:"2 d"})
     res.send({msg:"You have successfully registered", token:token,user:userObj.name,useremail:userObj.email})
    }

const loginController = async (req,res)=>{
    const logindata =req.body;
    // console.log(logindata.email);

    const userdetail = await User.findOne({"email":`${logindata.email}`})
    if(userdetail){
        const validpassword = await bcrypt.compare(logindata.password,userdetail.password) // if both passwords match then it gives true or false value
        const token =jwt.sign({useremail:logindata.email},secretkey,{expiresIn:"3 d"})

        if(validpassword){
            return res.send({msg:"You have sucessfully logged in",token:token,user:userdetail.name,useremail:userdetail.email})
        }
        else{
            return res.send({msg:"Your password is wrong"})
        }

    }

    else{
       return res.send({msg:"your email id is wrong"})
    }
}


const ProfileController=(req,res)=>{
res.send('Welcome')
}


module.exports={registerController,loginController,ProfileController}