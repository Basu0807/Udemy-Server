
const mongoose =require("mongoose")
const CloudUrl ="mongodb+srv://vasu:test123@cluster0.ui13cud.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery",true)

const connection=async()=>{
       try {
           await mongoose.connect(CloudUrl)
           console.log("DataBase Connected");
           
       } catch (error) {
           console.log(error);
           
       }
   }

       module.exports={connection}
