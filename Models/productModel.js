const mongoose =require('mongoose')

const ProductSchema = mongoose.Schema({
    id:{
type:Number
    },
    topic:{
        type:String,
        // required:[true,'please enter product heading']
    },
    instructor:{
        type:String,
        // required:[true,'please enter product name']
    },
    category:{
        type:String,
        // required:[true,'please enter product brand']
    },
    subcategory:{
        type:String,
        // required:[true,'please enter product brand']
    },
    image:{
        type:String,
        // required:[true,'please enter product image']
    },
    lectures:{
        type:String,
        // required:[true,'please enter product image']
    },
    price:{
        type:Number,
        // required:[true,'please enter product price']
    },
    offerPrice:{
        type:Number,
        // required:[true,'please enter product price']
    },
    duration:{
        type:Number,
        // required:[true,'please enter product description']
    },
    rating:{
        type:Number,
        // required:[true,'please enter product category']
    },
    quantity:{
        type:Number,
        // required:[true,'please enter product category']
    },
    point1:{
        type:String,
        // required:[true,'please enter product image']
    },
    point2:{
        type:String,
        // required:[true,'please enter product image']
    },
    point3:{
        type:String,
        // required:[true,'please enter product image']
    },
  


})

    module.exports=mongoose.model("UdemyCourses",ProductSchema)