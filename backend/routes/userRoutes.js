const express=require("express");
//basically remmoved app and used router instead
const router=express.Router()
const userData = require("../model/userModel");

//to get the data
router.get("/",async (req,res)=>{
    
    try {
        const allData=await userData.find();
        res.status(200).json(allData);        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});


// posting aka create operation
router.post("/",async(req,res)=>{
    // var name=req.body.name;
    // var email=req.body.email;
    // var age=req.body.age;
    //this can be also written as
    try {
        const{name,email,age}=req.body;
        const addedData=await userData.create({
        name:name,
        email:email,
        age:age,
    });
    //sending to front end userdata
    res.status(201).json(addedData);
   } catch (error) {
    res.status(400).json({error:error.message})
   }

})

//getting single user

router.get("/:id",async (req,res)=>{
    const {id}=req.params;
    try {
        const singleData=await userData.findById({_id:id});
        res.status(200).json(singleData);        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});


//delete by id
router.delete("/:id",async (req,res)=>{
    const {id}=req.params;
    try {
        const singleData=await userData.findByIdAndDelete({_id:id});
        res.status(200).json(singleData);        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
});

//update by id
router.patch("/edit/:id",async (req,res)=>{
    const {id}=req.params;
    console.log("the body ",req.body)
    console.log("get id ",id)
    try {
        const updatedUser=await userData.findByIdAndUpdate(id,req.body,{
            new:true,
        }
        );
        res.status(200).json(updatedUser);        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
});
//exporting this module
module.exports=router;