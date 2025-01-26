import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/signup", {
        mode: "cors",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({ username, name, email, password }),
        });
        const data = await response.json();
        console.log(data);
        if (data.success) {
          alert("Registration Succesful");
          navigate('/login');

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
      <h3 className='text-center text-[40px] mb-3'>Sign Up</h3>
        <form action="" onSubmit={handleSubmit} className='form'>
          <input onChange={(e)=> setUsername(e.target.value)} value={username} type="text" placeholder="Username" className="input" name='username' id='username' required />
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Name" className="input" name='name' id='name' required />
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="input" name='email' id='email' required />
          <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="input" name='password' id='password' required />
          <button type="submit" className="submit-button">Sign Up</button>
          <p className='mb-1 mt-1'>Already a User: <Link className="text-[#ffcc00]" to="/login">Login</Link> </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
