const mongoose = require("mongoose")
const dbURL   ="mongodb+srv://umuhoza:umuhoza@cluster0.6jpijzz.mongodb.net/todo"

const dataB = async()=>{
    try {
     await mongoose.connect(dbURL, {useNewUrlParser: true}).then(()=>{
        console.log("database connected successfully")
     })
    } catch (error) {
        console.log(error)
    }

}

module.exports =dataB