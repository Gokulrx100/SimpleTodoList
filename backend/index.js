const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/users");
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
    let { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }
    let newUser = new User({ username, password, todos: [] });
    await newUser.save();
    res.json({ message: users });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    let { username, password } = req.body;
    let user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    let token = jwt.sign(username, secret);
    res.json({ message: "Signin successful", token: token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/todo", Auth, async (req, res) => {
  try {
    let { taskname } = req.body;
    let username = req.username;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    user.todos.push({ taskname });
    await user.save();
    res.json({ message: "task addded" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/todos", Auth, async (req, res) => {
  try {
    let username = req.username;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.json({ todo: user.todos.map((t) => t.taskname) });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.delete("/deltodo", Auth, async (req, res) => {
  try {
    let { taskname } = req.body;
    let username = req.username;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Error deleting todo" });
    }
    user.todos = user.todos.filter((todo) => todo.taskname != taskname);
    await user.save();
    res.json({
      message: "task removed",
      todo: user.todos.map((t) => taskname),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
