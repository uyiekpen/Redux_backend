const mongoose = require("mongoose")

const SchemaDAta  = mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    date : {
        type: Date,
        default:Date.now()
    }
})

const EmailModel = mongoose.model("SchemaData",SchemaDAta)

module.exports = EmailModel