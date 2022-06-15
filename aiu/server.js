const express = require('express')
const dataB = require('./database/dataB')
const userRoute = require("./routes/userRoute")

const app = express()

app.use(express.json())
app.use("/user",userRoute)
const port =  4000;
dataB()
// function used to connect server
app.listen(port,()=>{
     //template string
    console.log(`server is connected on ${port}`)
    // double quotes
    //console.log("server is connected")
})