import Header from "./Header";
import useNowplaying from "../hooks/useNowplaying";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useEffect } from "react";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const BrowserHome=()=>{



        //calling customhook UseNowPlaying to fetch nowplaying movie data and store it into redux store :: movieslice
        useNowplaying();
    
        //calling customhook usePopularMovies to fetch popular movie data
        usePopularMovies();

        //calling customhook useTopratedMovies to fetch toprated movies
        useTopRatedMovies();

        //calling customhook useUpcomingMovies to fetch upcoming movies
        useUpcomingMovies();
    
    
    

    /* 
    Header
    MainContainer
        --video playing in the background
        --title and information about movie
    */

        //fetching nowplaying movie data
        
    return <>
    <div className="bg-black">
     <Header/>
     <MainContainer/> 
     <SecondContainer/>
   </div>
    </>

}
export default BrowserHome;