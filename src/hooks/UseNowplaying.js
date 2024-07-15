import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
//custom hook to get now playing movie data from the tmdb
const UseNowplaying=()=>{

    const dispatch=useDispatch();
    

    //calling api to fetch - nowplaying move data
    async  function nowplaying(){
    const nowplayingdata = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', apiOptions);
    const nowplayingdatajson=await nowplayingdata.json();

    console.log("nowplayingdatajson from the UseNowPlaying hook::");
    console.log(nowplayingdatajson.results);

    //adding nowplaying movies to redux store
    dispatch(addNowPlayingMovies(nowplayingdatajson.results));

    }

    useEffect(()=>{nowplaying();},[]);

    



 
}

export default UseNowplaying;