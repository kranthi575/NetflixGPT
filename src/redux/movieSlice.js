import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({

    name:"movies",
    initialState:{nowplayingmovies:{}},
    reducers:{
        addNowPlayingMovies:(state,action)=>{state.nowplayingmovies=action.payload}
    }
});

export const {addNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;
