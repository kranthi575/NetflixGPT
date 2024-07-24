import { createSlice } from "@reduxjs/toolkit";

const secondCtrlSlice=createSlice({

    name:'secondCtrl',
    initialState:{
        popularMovies:{},
        topratedMovies:{},
        upcomingMovies:{}
    },
    reducers:{
        addPopularMovies:(state,action)=>{state.popularMovies=action.payload},
        removePopularMovies:(state,action)=>{state.popularMovies=action.payload},
        addTopRatedMovies:((state,action)=>{state.topratedMovies=action.payload}),
        addUpcomingMovies:((state,action)=>{state.upcomingMovies=action.payload})
    }
});

export const {addPopularMovies,removePopularMovies,addTopRatedMovies,addUpcomingMovies}=secondCtrlSlice.actions;
export default secondCtrlSlice.reducer;