import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({

    name:"user",
    initialState:{activeUser:{uid:'',displayName:'',email:''}},
    reducers:{

        addUser:(state,action)=>{state.activeUser = action.payload},
        removeUser:(state,action)=>{state.activeUser = action.payload}
    }
});

//exporting actions
export const {addUser,removeUser}=userSlice.actions;

//export reducer
export default userSlice.reducer;