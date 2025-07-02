const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    taskname:{
        type:String,
        required:true
    }
})

const userSchema= new mongoose.Schema({
    username : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    todos:[todoSchema]
})
const User=mongoose.model("User",userSchema);
module.exports=User;

