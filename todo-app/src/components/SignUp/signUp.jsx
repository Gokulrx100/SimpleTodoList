import axios from "axios";
import { useState } from "react";
import "./signup.css";
import SwitchToSignIn from "./SwitchToSignIn";
import InputSection from "./InputSection";

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
        if (err.response?.data?.errors) {
          alert(err.response.data.errors.join("\n"));
        } else {
          alert(err.response?.data?.message || "An error occurred");
        }
      });
  };

  return (
    <div id="signup-container">
      <h2 id="heading">SignUp</h2>
      <InputSection
        username={username}
        setPassword={setPassword}
        password={password}
        setUsername={setUsername}
        Signup={Signup}
      />
      <SwitchToSignIn />
    </div>
  );
}

export default SignUp;
