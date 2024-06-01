import React, { useEffect, useState } from 'react'
import { del, get } from '../services/API'
import '../styles/Admin.css'
import toast from 'react-hot-toast'
export default function Admin() {
    const[users,setUsers]=useState();
    const getUsers=async()=>{
            try{
                const request=await get('/api/admin/getUsers')
                const response=request.data
                if(request.status===200){
                    setUsers(response.users)
                }
            }
            catch(error){
                console.log(error);
            }
        }
    useEffect(()=>{
        getUsers();
    },[])

    const handleDelete=async(id)=>{
        try{
            const request=await del(`/api/admin//delete/${id}`)
            const response=request.data
            if(request.status===200){
                toast.success(response.message)
                getUsers();
            }
        }
        catch(error){
            if(error.response){
                toast.error(error.response.data.message)
            }
        }
    }
    return (
        <>
            <div className='admin-container'>
                <h2>Mange Users</h2>
                <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {users && users.map((elem,index)=>{
                            return(
                                <tr key={index}>
                                <td>{elem.name}</td>
                                <td>{elem.email}</td>
                                <td>
                                <button onClick={()=>handleDelete(elem._id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}