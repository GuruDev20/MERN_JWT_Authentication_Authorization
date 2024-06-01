import React,{useState} from 'react'
import '../styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { post } from '../services/API';
import {toast} from 'react-hot-toast'
export default function Register() {
    const navigate=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(name,email,password);
        try{
            const request=await post('/api/auth/register',{name,email,password})
            const response=request.data;
            if(request.status===200){
                toast.success(response.message);
                navigate('/login')
            }
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div className='login-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor="Username">Name</label>
                    <input type="text" name="" id="name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='input-group'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit'>Register</button>
                <p className='register-link'>
                Already have an account? <Link to={'/login'}>Login here</Link>
                </p>
            </form>
        </div>
    )
}
