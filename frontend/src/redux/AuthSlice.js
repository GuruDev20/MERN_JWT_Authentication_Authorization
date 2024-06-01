import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../services/API";

export const updateUser=createAsyncThunk('updateUser',async()=>{
    try{
        const request=await get('/api/auth/checkUser')
        const response=request.data
        return response
    }
    catch(e){
        console.log(e)
    }
})

const initialState={
    loading:null,
    error:null,
    user:null
}
const AuthSlice=createSlice({
    name:"authSlice",
    initialState:initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        Logout:(state)=>{
            state.user=null
            state.loading=null
            state.error=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(updateUser.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(updateUser.fulfilled,(state,action)=>{
            state.loading=null
            state.user=action.payload
        })
        builder.addCase(updateUser.rejected,(state,action)=>{
            state.loading=null
            state.error=action.error.payload
            state.user=null
        })
    }
})

export default AuthSlice.reducer
export const {setUser,Logout}=AuthSlice.actions