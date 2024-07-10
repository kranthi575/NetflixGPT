import { createSlice } from "@reduxjs/toolkit";

//creating slice
//add name,state,reducers
const userSlice=createSlice({
    name:"user",
    initialState:user,
    reducers:{

        addUser:(state,action)=>{},
        removeUser:(state,action)=>{}
    }
});

//export all actions
export const {addUser,removeUser}=userSlice.actions;

//export reducer
export default userSlice.reducer;