import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground=({id})=>{

    console.log("VideoBackground :: movieId : ",id)
    
    useMovieTrailer({id});

    //reading trailer from redux store
    //CHECKING WITH ? IS CALLED OPTIONAL CHAINING
    // const movieTrailer=useSelector((store)=>{return store?.movies?.movietrailer});

    // if(movieTrailer===null) return;
    // console.log("movie trailer from VideobBackground:")
    // console.log(movieTrailer);

    const trailerKey="L4DrolmDxmw";
    return(
        <div className="relative">
            <iframe width="560" height="315" 
            src={"https://www.youtube.com/embed/"+trailerKey}
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    );
}
export default VideoBackground;