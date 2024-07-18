import Header from "./Header";
import useNowplaying from "../hooks/useNowplaying";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useEffect } from "react";
const BrowserHome=()=>{


    //calling customhook UseNowPlaying to fetch nowplaying movie data and store it into redux store :: movieslice
    
    useNowplaying();
    

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
   {/* <SecondContainer/>  */}
   </div>
    </>

}
export default BrowserHome;