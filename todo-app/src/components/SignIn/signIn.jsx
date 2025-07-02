import axios from "axios";
import { useEffect, useState } from "react";
import "./signin.css";
import InputSection from "./InputSection";
import SwitchtoSignUp from "./SwitchToSignUp";

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
    <div id="signin-container">
      <h2 id="heading">SignIn</h2>
      <InputSection
        username={username}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
        Signin={Signin}
      />
      <SwitchtoSignUp />
    </div>
  );
}

export default SignIn;
