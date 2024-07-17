import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{

    //reading out the nowplaying movies data from the redux store

    const nowplayingMovies=useSelector((store)=>store.movies.nowplayingmovies);

    console.log("printing out nowplaying movies data from the redux store :: maincontroller component");
    console.log(nowplayingMovies[0])
    // if(nowplayingMovies!=null){
    // nowplayingMovies?.map((movie)=>{
    //     console.log(movie);
    // });}

    const mainMovie=nowplayingMovies[0];

    console.log(mainMovie);

    //early return :: checking if object is returned or not
    if(mainMovie==undefined) return;

    const  {id,original_title,overview} = mainMovie;

    console.log(id,original_title,overview);

    return <>
            <VideoTitle original_title={original_title} overview={overview}/>
            
    </>

}
export default MainContainer;