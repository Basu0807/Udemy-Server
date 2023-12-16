const mongoose =require("mongoose")

const MyLearningSchema =mongoose.Schema({
    email:{type:String},
       Item:[
        {
            id:{
                type:Number
                    },
                    topic:{
                        type:String,
                    },
                    instructor:{
                        type:String,
                    },
                    image:{
                        type:String,
                    },
                    lectures:{
                        type:String,
                    },
                    duration:{
                        type:Number,
                    },
                    rating:{
                        type:Number,
                    },
                 
        }
       ]
              
            
    
})

module.exports=mongoose.model("MyLearning",MyLearningSchema)