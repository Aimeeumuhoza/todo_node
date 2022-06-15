const express = require("express")
const {createUser,getUser,getAll,delet,update} = require("../controller/userController")
const userRoute = express()

userRoute.post("/create",createUser)
userRoute.get("/get/:_id",getUser)
userRoute.get("/all",getAll)
userRoute.delete("/delete/:_id",delet)
userRoute.patch("/update/:_id",update)

module.exports = userRoute