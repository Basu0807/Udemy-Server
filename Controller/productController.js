const ApiFeatures = require('../ApiFeature/apifeatures')
const dummydata  = require('../Data/DummyData')
const Product =require('../Models/productModel')


const AddProductController= async(req,res)=>{
    const NewProduct =dummydata
    
   const existedProduct =await Product.findOne({"heading":`${NewProduct.heading}`})
if(existedProduct){
        return res.send({msg:"Products Already Exist"})
     }
     
        const product = await Product.create(NewProduct)
        return res.send({msg:"products added",data:product})
     
}
const AllProductController =async(req,res)=>{
    const product =await Product.find({})
    return res.send(product)
}
const SearchController = async(req,res)=>{
    const apiFeature = new ApiFeatures(Product.find(),req.query).search()
const product = await apiFeature.query

    return res.send({msg:"product found",data:product}) 


}

const SpecificProductController= async(req,res)=>{
    const id=req.params.id
    const product = await Product.findById(id)
    if(product){
        return res.send({data:product})
    }
    return res.send({msg:"Product Not Found"})

    
    }

    const DeleteController= async(req,res)=>{
        const id=req.params.id
        const product = await Product.findById(id)
        if(!product){
            return res.send({msg:"Product Not Found"})

        }
        await Product.deleteOne(product);
        return res.send({msg:"Product deleted successfully"})
        
        }

        const DeleteAll =async(req,res)=>{
            await Product.deleteMany({})
        res.send({msg:"Database clear"})
        }

module.exports={AllProductController,SearchController,AddProductController,SpecificProductController,DeleteController,DeleteAll}