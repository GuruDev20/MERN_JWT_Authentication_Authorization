import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function AdminLayouts() {
    const user=useSelector((state)=>state.Auth.user)
    console.log(user);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!user || user.role!=='admin'){
            navigate('/login')
        }
    },[navigate,user])
    return (
        <>
            <Outlet/>
        </>
    )
}
