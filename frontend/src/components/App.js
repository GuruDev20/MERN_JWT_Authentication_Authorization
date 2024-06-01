import React, { useEffect } from 'react'
import '../styles/App.css'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Admin from '../pages/Admin'
import AdminLayouts from '../layouts/AdminLayouts'
import UserLayout from '../layouts/UserLayout'
import PublicLayout from '../layouts/PublicLayout'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/AuthSlice'
export default function App() {
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.Auth.user)
    useEffect(()=>{
        dispatch(updateUser())
    },[dispatch, user])
    return (
        <>
            <Routes>
                <Route path='/' element={<UserLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
                <Route path='/admin' element={<AdminLayouts/>}>
                    <Route index element={<Admin/>}/>
                </Route>
                <Route path='/' element={<PublicLayout/>}>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Route>
            </Routes>
        </>
    )
}
