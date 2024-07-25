import { createSlice } from "@reduxjs/toolkit";

const secondCtrlSlice=createSlice({

    name:'secondCtrl',
    initialState:{
        popularMovies:{},
        topratedMovies:{},
        upcomingMovies:{},
        currentPlayingMovieCredits:{}
    },
    reducers:{
        addPopularMovies:(state,action)=>{state.popularMovies=action.payload},
        removePopularMovies:(state,action)=>{state.popularMovies=action.payload},
        addTopRatedMovies:((state,action)=>{state.topratedMovies=action.payload}),
        addUpcomingMovies:((state,action)=>{state.upcomingMovies=action.payload}),
        addCurrentPlayingMovieCredits:((state,action)=>{state.currentPlayingMovieCredits=action.payload}),
        removeCurrentPlayingMovieCredits:((state,action)=>{state.currentPlayingMovieCredits=action.payload})
    }
});

export const {addPopularMovies,removePopularMovies,addTopRatedMovies,addUpcomingMovies,addCurrentPlayingMovieCredits,removeCurrentPlayingMovieCredits}=secondCtrlSlice.actions;
export default secondCtrlSlice.reducer;