import { createSlice } from "@reduxjs/toolkit";

const secondCtrlSlice=createSlice({

    name:'secondCtrl',
    initialState:{
        popularMovies:{},
        topratedMovies:{}
    },
    reducers:{
        addPopularMovies:(state,action)=>{state.popularMovies=action.payload},
        removePopularMovies:(state,action)=>{state.popularMovies=action.payload},
        addTopRatedMovies:((state,action)=>{state.topratedMovies=action.payload})
    }
});

export const {addPopularMovies,removePopularMovies,addTopRatedMovies}=secondCtrlSlice.actions;
export default secondCtrlSlice.reducer;