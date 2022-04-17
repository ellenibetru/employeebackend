const mongoose = require("mongoose");
const { stringify } = require("querystring");
const EmployeeSchema=new mongoose.Schema(
    {
     image:{
         type:String,
         required:false,
     },
     name:{
        type:String,
        required:true,
    },   
    occupation:{
        type:String,
        required:true,
     },
     callOffice:{
        type:String,
        required:true,   
    },
   
    callMobile:{
        type:String,
        required:true,   
    },
    sms:{
        type:String,   
    },
    email:{
        type:String,
       
    }
    })
    module.exports=mongoose.model('Employee',EmployeeSchema)