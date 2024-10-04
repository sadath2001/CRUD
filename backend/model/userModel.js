const mongoose=require("mongoose");

//schema for the project
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
    },
},
{ timestamps: true }
)

//creating the modal aka collection

const User=mongoose.model('User',schema);
module.exports=User;