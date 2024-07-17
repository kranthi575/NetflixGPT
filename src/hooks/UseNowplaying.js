import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
//custom hook to get now playing movie data from the tmdb
const useNowplaying=()=>{

//need to fetch the nowplaying movies data from ifdb
console.log("useNowPlaying called::");
//creating dispatch
const dispatch=useDispatch();

const nowplayingMovies=useSelector((store)=>store.movies.nowplayingmovies);

const fetchnowPlayingmovieData=async ()=>{

    //calling api
    console.log("calling api")
    const fetchmoviedata= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', apiOptions);

    const moviedata=await fetchmoviedata?.json();


    //adding json file into redux store
    console.log("movie data form the usenowplaying")
    console.log(moviedata?.results);

    dispatch(addNowPlayingMovies(moviedata?.results));
    //done with adding movie data to redux store



}

useEffect(()=>{ if(nowplayingMovies!=null){console.log("useeffct is calling in useNowPlaying");fetchnowPlayingmovieData();}},[]);


}

export default useNowplaying;