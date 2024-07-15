import Header from "./Header";
import UseNowplaying from "../hooks/UseNowplaying";

const BrowserHome=()=>{

    console.log("BrowserHome comp::");
    //calling customhook UseNowPlaying to fetch and store data into redux store :: movieslice
    UseNowplaying();


    /* 
    Header
    MainContainer
        --video playing in the background
        --title and information about movie
    */

        //fetching nowplaying movie data
        

    return <>
    <Header/>
    
    </>

}
export default BrowserHome;