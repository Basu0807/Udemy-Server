const express =require('express')
const cors =require('cors')
const UserRoutes = require('./Routes/UserRoutes')
const { connection } = require('./Config/db')
const productRoute = require('./Routes/productRoutes')
const app =express()
const Port =4000

app.use(express.json()) // body parser( to read the data from the client side)

app.use(cors({
    origin:"*"
}))

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
            price_data:{
                currency:"inr",
                product_data:{
                    name:product.heading,
                },
                unit_amount:product.price * 100
            },
            quantity:product.quantity
           }))
           const session =await stripe.checkout.sessions.create({
            payment_method_types:["card"],
             line_items:lineItems,
            mode:"payment",
            success_url:"https://dainty-pothos-8d469f.netlify.app/",
            cancel_url:"https://dainty-pothos-8d469f.netlify.app/",
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