const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/users");
const bcrypt=require("bcrypt");
const {z}=require("zod");
const {signupSchema,signinSchema,todoSchema}=require("./validation/validation");
const saltRounds=10;
async function startServer() {
  try {
    await mongoose.connect(
      "mongodb+srv://user123:tD4rUzrOZ0UwlGUI@cluster0.g0omesd.mongodb.net/Todo-App?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(3000, () => {
      console.log("server is running at port 3000");
    });
  } catch (err) {
    console.log("error connecting to MongoDB");
  }
}

startServer();

const secret = "123random";

app.use(cors());
app.use(express.json());

function Auth(req, res, next) {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }
  try {
    const username = jwt.verify(token, secret);
    req.username = username;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.post("/signup", async (req, res) => {
  try {
    signupSchema.parse(req.body);
    let { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }
    let hashedPassword=await bcrypt.hash(password,saltRounds);
    let newUser = new User({ username,password:hashedPassword, todos: [] });
    await newUser.save();
    res.json({ message: "user created" });
  } catch (error) {
    if(error instanceof z.ZodError){
      let errMessage=error.errors.map(e=>e.message);
      return res.status(400).json({message:"validation error",errors:errMessage});
    }
    else{
    res.status(500).json({ message: "Server Error" });
    }
  }
});

app.post("/signin", async (req, res) => {
  try {
    signinSchema.parse(req.body);
    let { username, password } = req.body;
    let user = await User.findOne({ username});
    if (!user) {
      return res.status(401).json({ message: "invalid Username" });
    }
    let isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(401).json({message:"Invalid Password"})
    }
    let token = jwt.sign(username, secret);
    res.json({ message: "Signin successful", token: token });
  } catch (error) {
    if(error instanceof z.ZodError){
      let errMessage=error.errors.map(e=>e.message);
      return res.status(400).json({message:"validation error",errors:errMessage});
    }
    else{
    res.status(500).json({ message: "Server Error" });
    }
  }
});

app.post("/todo", Auth, async (req, res) => {
  try {
    todoSchema.parse(req.body);
    let { taskname } = req.body;
    let username = req.username;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    user.todos.push({ taskname });
    await user.save();
    res.json({ message: "task addded",todo:user.todos });
  } catch (error) {
    if(error instanceof z.ZodError){
      let errMessage=error.errors.map(e=>e.message);
      return res.status(400).json({message:"validation error",errors:errMessage});
    }
    else{
    res.status(500).json({ message: "Server Error" });
    }
  }
});

app.get("/todos", Auth, async (req, res) => {
  try {
    let username = req.username;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.json({ todo: user.todos});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.delete("/deltodo", Auth, async (req, res) => {
  try {
    let { id } = req.body;
    let username = req.username;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Error deleting todo" });
    }
    user.todos = user.todos.filter((todo) => todo._id.toString() != id);
    await user.save();
    res.json({
      message: "task removed",
      todo: user.todos
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
