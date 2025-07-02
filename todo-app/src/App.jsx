import { useState } from 'react'
import './App.css'
import {Route,Routes,BrowserRouter,Navigate} from "react-router"
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Dashboard from './components/dashboard'
import Error from './components/Error'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace/>}/>
        <Route path="signup" element={<SignUp/>} />
        <Route path="signin" element={<SignIn/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
