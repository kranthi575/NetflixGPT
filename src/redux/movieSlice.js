import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({

    name:"movies",
    initialState:{nowplayingmovies:{},movietrailer:{}},
    reducers:{
        addNowPlayingMovies:(state,action)=>{state.nowplayingmovies=action.payload},
        addMovieTrailer:(state,action)=>{state.movietrailer=action.payload},
        removeMovieTrailer:(state,action)=>{state.movietrailer=action.payload},
        removeNowPlayingMovies:(state,action)=>{state.nowplayingmovies=action.payload}
    }
});

export const {addNowPlayingMovies,addMovieTrailer,removeMovieTrailer,removeNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;
