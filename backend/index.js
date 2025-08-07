const express=require("express")
const connection = require("./config/db")
const router = require("./routes/router")

const app=express()
const cors=require("cors")

app.use(express.json())
app.use(cors())

app.use(router)

app.get("/", (req,res)=>{
     res.send(`
    <h1>🎉 Welcome to the Backend API! 🚀</h1>
    <p>🔧 CRUD operations are ready to go!</p>
  `);
})

app.listen(process.env.PORT, async()=>{

    try{
        await connection
        console.log("connected to the DB")
    }
    catch(err){
        console.log("error while connecting to the db",err)
    }
})