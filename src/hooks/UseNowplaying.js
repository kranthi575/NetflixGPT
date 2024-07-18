import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
//custom hook to get now playing movie data from the tmdb
const useNowplaying=()=>{

//need to fetch the nowplaying movies data from ifdb
//creating dispatch
const dispatch=useDispatch();
var nowPlayingMoviesEmpty=false;
const nowplayingMovies=useSelector((store)=>store.movies.nowplayingmovies);
if(Object.keys(nowplayingMovies).length==0){nowPlayingMoviesEmpty=true;}

const fetchnowPlayingmovieData=async ()=>{

    //calling api
    const fetchmoviedata= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', apiOptions);

    const moviedata=await fetchmoviedata?.json();


    //adding json file into redux store

    dispatch(addNowPlayingMovies(moviedata?.results));
    //done with adding movie data to redux store



}

useEffect(()=>{nowPlayingMoviesEmpty && fetchnowPlayingmovieData()},[]);


}

export default useNowplaying;