import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router";
import SignIn from "./components/SignIn/signIn";
import SignUp from "./components/SignUp/signUp";
import Dashboard from "./components/Dashboard/dashboard";
import Error from "./components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
