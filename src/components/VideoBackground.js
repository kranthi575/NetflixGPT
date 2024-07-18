import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground=({id})=>{

    useMovieTrailer({id});

    //reading out the movietrsiler form the redux store
    const movieTrailer=useSelector((store)=>store.movies?.movietrailer);
    const {key}=movieTrailer;

    return<>
            <div className="">
            <iframe width="1420" height="600" 
                src={"https://www.youtube.com/embed/"+key}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            </div>
        </>

}
export default VideoBackground;