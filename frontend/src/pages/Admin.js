import React, { useEffect } from 'react'
import { get } from '../services/API'
export default function Admin() {
    useEffect(()=>{
        const getUsers=async()=>{
            try{
                const request=await get('/api/admin/getUsers')
                const response=request.data
                console.log(response);
            }
            catch(error){
                console.log(error);
            }
        }
        getUsers();
    },[])
    return (
        <div>Admin</div>
    )
}
