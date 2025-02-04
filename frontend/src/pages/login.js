import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState } from "react";


export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
        mode: "cors",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({email, password }),
        });
        const data = await response.json();
        // console.log(data);
        if (data.success) {
          alert("login Succesfull");
          localStorage.setItem("token", data.token);
          localStorage.setItem("userID", data.userID);
          navigate("/");

          } 
          else {
            setError(data.message);
            alert(data.message);
            }
    }
    catch (error) {
      console.error(error);
    }
  }
  return (
    <>
     <div className='container flex items-center flex-col justify-center min-h-[100vh] min-w-[100vw]'>
      <h3 className='text-center text-[40px] mb-3'>Login</h3>
        <form onSubmit={handleSubmit} action="" className='form'>
       
          <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Email" className="input" required />
          <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="Password" className="input" required />
          <button type="submit" className="submit-button">Login</button>
          <p className='mb-1 mt-1'>New User: <Link className="text-[#ffcc00]" to="/signup">Sign Up</Link> </p>
        </form>
      </div>
      
    </>
  )
}

