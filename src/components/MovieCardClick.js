import { useLocation, useParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import Header from "./Header";
import useMovieCredits from "../hooks/useMovieCredits";

const MovieCardClick=()=>{

  //calling custom hook useMovieCredits to collect artists data of current movie card
    
    //reading the state variable passed over the link from the MovieCard Component
    //useLocation() helps has to locate the URL and its state
    //early return
    //early return
        
    
        
    const location=useLocation();
    const movieData=location.state;
    useMovieCredits(movieData!=null?movieData.id:null);
    if(movieData===null) return;
    return <>
            <Header/>
            <VideoBackground id={movieData.id}/>
    </>  
}
export default MovieCardClick;