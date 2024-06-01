import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import { post } from '../services/API'
import { Logout } from '../redux/AuthSlice'
export default function Home() {
    const user=useSelector((state)=>state.Auth.user)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const goToAdmin=()=>{
        navigate('/admin')
    }
    const handleLogout=async()=>{
        try{
            const request=await post('/api/auth/logout')
            // const response=request.data
            if(request.status===200){
                dispatch(Logout())
                navigate('/login')
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className='home-container'>
                <div className='user-card'>
                    <h2> Welcome,{user && user.name}</h2>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                    {user && user.role==='admin' ?<button className='admin-btn' onClick={goToAdmin}>Go To admin</button>:''}
                </div>
            </div>
        </>
    )
}