import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
import Error from './pages/erorr'
import SignUp from "./pages/signup";
import "./App.css"
import Login from "./pages/login";
import Profile from "./pages/profile";
import AddNote from "./pages/addnote";
import SingleNotePage from "./pages/singleNotePage";


const app = ()=>{

  return (
   <>
   <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addnote" element={<AddNote />} />
          <Route path="/singleNotePage" element={<SingleNotePage />} />


         
          
          <Route path="*" element={<Error />} />
        
      </Routes>
    </BrowserRouter>

   </>
  )


}

export default app;