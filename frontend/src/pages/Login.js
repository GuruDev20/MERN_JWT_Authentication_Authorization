import React, { useState } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
export default function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email,password);
    }

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit'>Login</button>
                <p className='register-link'>
                Not registered? <Link to={'/register'}>Register here</Link>
                </p>
            </form>
        </div>
    )
}
