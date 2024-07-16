import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer=()=>{

   

//reading data from redux store :: movieslice

const nowPlayingMovies=useSelector((store)=>store.movies?.nowplayingmovies);

if(!nowPlayingMovies) return;

const mainMovie=nowPlayingMovies[0];
console.log("main movie");
console.log(mainMovie);
//destructering
const {original_title,overview,id}=mainMovie;

console.log("mainMovie Id");
console.log(id);
return <>
        
        <VideoTitle original_title={original_title} overview={overview}/>
        <VideoBackground id={id}/>

</>

}

export default MainContainer;