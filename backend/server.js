const express=require("express");
const app=express();
const mong=require("mongoose");
const dotenv=require("dotenv");
dotenv.config()
const models=require("./model/userModel");
const userRouter=require("./routes/userRoutes")
const cors=require("cors");
// basically data from backend will get converted to json
app.use(express.json())
app.use(cors()) // to prevent cors error
mong.connect(process.env.URI).then(
    ()=>{
        console.log("connection successful");
        app.listen(process.env.PORT || 5000, (err)=>{
            if(err) console.log(err);
            console.log("running susscessfully at",process.env.PORT)
        });
    }).catch((error)=>{
        console.log("Error ",error)
})


//app.use(userRouter)
app.use(userRouter) //->this will be the starting uri
