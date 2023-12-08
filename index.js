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
    
    app.listen(Port, async()=>{
        try {
            await connection();
         console.log(`my server is running after making connection on port no. ${Port}`);
         
        } catch (error) {
         console.log(`Error occured`,error);
        }
      })