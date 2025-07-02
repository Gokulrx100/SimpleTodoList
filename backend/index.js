const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
const cors = require("cors");

let users=[];
const secret="123random"

app.use(cors());
app.use(express.json());

function Auth(req,res,next){
    const {token}=req.headers;
    if(!token){
        return res.status(401).json({message:"Token missing"});
    }
    try{
        const username=jwt.verify(token,secret);
        req.username=username;
        next();
    }catch(err){
        return res.status(401).json({message:"Invalid token"});
    }
}

app.post("/signup",(req,res)=>{
    let {username,password}=req.body;
    let user=users.find(i=>i.username===username);
    if(user){
      return res.status(401).json({message:"User already exists"});
    }
    users.push({username,password,todo:[]});
    res.json({message:users});
})

app.post("/signin",(req,res)=>{
    let {username,password}=req.body;
    let index=users.findIndex(i=>i.username===username && i.password===password);
    if(index===-1){
       return res.status(401).json({message:"invalid credentials"});
    }
    let token=jwt.sign(username,secret);
    res.json({message:"Signin successful",token:token});
})

app.post("/todo", Auth,(req,res)=>{
    let {taskname}=req.body;
    let username=req.username;
    let index=users.findIndex(i=>i.username===username);
    if(index===-1){
       return res.status(401).json({message:"User not found"});
    }
    users[index].todo.push(taskname);
    res.json({message:"task addded"});
});

app.get("/todos",Auth,(req,res)=>{
    let username=req.username;
    let index=users.findIndex(i=>i.username===username);
    if(index===-1){
       return res.status(401).json({message:"User not found"});
    }
    res.json({todo:users[index].todo});
})

app.delete("/deltodo",Auth,(req,res)=>{
    let {taskname}=req.body;
    let username=req.username
    let user=users.find(i=>i.username===username);
    if(!user){
      return res.status(401).json({message:"Error deleting todo"});
    }
    user.todo=user.todo.filter(todo=>todo!=taskname)
    res.json({message:"task removed",todo:user.todo});
})

app.listen(3000);
