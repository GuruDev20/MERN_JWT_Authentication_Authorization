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
        setUser:(state,action)=>{
            state.user=action.payload
        },
        Logout:(state)=>{
            state.user=null
            state.loading=null
            state.error=null
        }
    }
})

export default AuthSlice.reducer
export const {setUser,Logout}=AuthSlice.actions