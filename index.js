const express =require('express')
const cors =require('cors')
const UserRoutes = require('./Routes/UserRoutes')
const { connection } = require('./Config/db')
const productRoute = require('./Routes/productRoutes')
const stripe=require("stripe")("sk_test_51OHNDNSEW2AXc16ZBAEHpvqalk8PlE6NnomLVaNBKct3I65YWgGqW7vkw8xlhNha0xCXyVOeaISEDIZ52ty1UOcy00BbHHzkqv")


const app =express()
app.use(cors({
    origin:"*"
}))
const Port =4000

app.use(express.json()) // body parser( to read the data from the client side)



app.use('/user',UserRoutes)
app.use('/store',productRoute)

app.get('/',(req,res)=>{
    res.send("This is our HomePage")
    console.log("Home page");
    })

    app.post("/checkout",async(req,res)=>{
        const {products}=req.body
        console.log(products)
        const lineItems =products.map((product)=>({
            price:{
                currency:"inr",
                product_data:{
                    name:product.topic,
                },
                unit_amount:product.offerPrice 
            },
            quantity:product.quantity
           }))
           const session =await stripe.checkout.sessions.create({
            payment_method_types:["card"],
             line_items:lineItems,
            mode:"payment",
            success_url:"https://master--lively-kheer-8f0ecb.netlify.app/",
            cancel_url:"https://master--lively-kheer-8f0ecb.netlify.app/",
        })
        res.json({id:session.id})
        })
    
    app.listen(Port, async()=>{
        try {
            await connection();
         console.log(`my server is running after making connection on port no. ${Port}`);
         
        } catch (error) {
         console.log(`Error occured`,error);
        }
      })