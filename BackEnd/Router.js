const express = require("express")
const mongoose = require ("mongoose")
const EmailModel = require("./Model")

const router = express.Router()


router.get("/", async(req, res) =>{
    try{
        const GetData = await EmailModel.find()
        res.status(200).json({
            message : "found succesfully",
            data: GetData,
        })
 
    }catch(error){
        res.status(400).json({
            message: "Error",
            data : error.message
        })
 
    }
 })


 router.get("/:id", async(req, res) =>{
    try{
        const GetData = await EmailModel.findById(req.params.id)
        res.status(200).json({
            message : "found succesfully",
            data: GetData,
        })
 
    }catch(error){
        res.status(400).json({
            message: "Error",
            data : error.message
        })
 
    }
 })
 

router.post("/", async(req, res) =>{
   try{
       const postData = await EmailModel.create({
           name: req.body.name,
           email: req.body.email,

       })
       res.status(200).json({
           message : "found succesfully",
           data: postData,
       })

   }catch(error){
       res.status(400).json({
           message: "Error",
           data : error.message
       })

   }
})

router.put("/:id", async(req, res) =>{
    try{
        const GetData= await EmailModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message : "Update succesfully",
            data: GetData,
        })
 
    }catch(error){
        res.status(400).json({
            message: "Error",
            data : error.message
        })
 
    }
})
router.delete("/:id", async(req, res) =>{
    try{
        const GetData= await EmailModel.findByIdAndRemove(req.params.id)
        res.status(200).json({
            message : "Update succesfully",
            data: GetData,
        })
 
    }catch(error){
        res.status(400).json({
            message: "Error",
            data : error.message
        })
 
    }
 })

module.exports = router