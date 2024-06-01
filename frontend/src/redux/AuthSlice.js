import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:null,
    error:null,
    user:null
}
const AuthSlice=createSlice({
    name:"authSlice",
    initialState:initialState,
    reducers:{
        setLoading:(state,action)=>{
            state.loading=action.payload
        },
        setError:(state,action)=>{
            state.error=action.payload
        },
        setUser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export default AuthSlice.reducer
export const {setUser}=AuthSlice.actions