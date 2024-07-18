import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer=()=>{

    //reading out the nowplaying movies data from the redux store

    const nowplayingMovies=useSelector((store)=>store.movies.nowplayingmovies);

    // if(nowplayingMovies!=null){
    // nowplayingMovies?.map((movie)=>{
    //     console.log(movie);
    // });}

    const mainMovie=nowplayingMovies[0];


    //early return :: checking if object is returned or not
    if(mainMovie==undefined) return;

    const  {id,original_title,overview} = mainMovie;


    return <>
    <div  className="bg-black">
            
            <VideoBackground  id={id}/>
            <VideoTitle  original_title={original_title} overview={overview}/>
           

    </div>   
         
    </>

}
export default MainContainer;