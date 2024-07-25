import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground=({id})=>{

    useMovieTrailer({id});

    //reading out the movietrsiler form the redux store
    const movieTrailer=useSelector((store)=>store.movies?.movietrailer);
    console.log("movieTrailer")
    console.log(movieTrailer)
    if(movieTrailer===undefined)return;
    const {key}=movieTrailer;
    

    return<>
            <div className="bg-black">
            <iframe width="1420" height="600" 
                src={"https://www.youtube.com/embed/"+key+"?mute=1&autoplay=1"}
                title="YouTube video player" frameBorder="0" 
                allow="autoplay; encrypted-media;"
                mute="1"
                controls="0"
                modestbranding="1"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            </div>
        </>

}
export default VideoBackground;