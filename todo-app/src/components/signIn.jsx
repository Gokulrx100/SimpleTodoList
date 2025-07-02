import axios from "axios";
import { useEffect, useState } from "react";
import "./signin.css"
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Signin = () => {
    axios
      .post("http://localhost:3000/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.location = "/dashboard";
      }).catch(err=>{
        alert(err.response.data.message);
      })
  };

  const switchContainer=()=>{
    window.location="/signup"
  }

  return (
    <div id="signin-container">
      <h2 id="heading">SignIn</h2>
      <input
        type="text"
        placeholder="Username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={Signin}>Sign In</button>
      <p>Don't have an account?</p>
      <button onClick={switchContainer} id="switchBtn">Sign Up</button>
    </div>
  );
}

export default SignIn;
