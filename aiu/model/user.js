const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase:true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String
    }

})
const User = mongoose.model("users",userSchema)
module.exports = User