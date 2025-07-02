import axios from "axios";
import { useState } from "react";
import "./signup.css";
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Signup = () => {
    axios
      .post("http://localhost:3000/signup", {
        username: username,
        password: password,
      })
      .then((response) => {
        window.location = "/signin";
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const switchContainer = () => {
    window.location = "/signin";
  };

  return (
    <div id="signup-container">
      <h2 id="heading">SignUp</h2>
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
        autoComplete="off"
      />
      <button onClick={Signup}>Sign Up</button>
      <p>Already have an account?</p>
      <button onClick={switchContainer} id="switchBtn">
        Sign In
      </button>
    </div>
  );
}

export default SignUp;
