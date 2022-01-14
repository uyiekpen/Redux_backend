const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/email",{
    useNewUrlParser: true,
})

mongoose.connection
.on("open", (req, res)=>{
    console.log("Database is connected")
})

.once("error" ,( req , res) =>{
    console.log("failed to connect")
})

module.exports = mongoose;