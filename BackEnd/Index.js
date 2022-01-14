const express = require("express")
const mongoose = require("mongoose")
const port = 3281
const cors = require("cors")
const app = express ()
const path = require("./Router")

require("./Db")

app.use(express.json())
app.use(cors())
app.use("/api", path)

app.get("/", async(req,res)=>{
    res.send("hello").json(req.body)
})



app.listen(port,()=>{
    console.log(`welcome to class ${port}`)
})