import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addMovieTrailer } from "../redux/movieSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const useMovieTrailer=({id})=>{

    const dispatch=useDispatch();

    const movieTrailer=useSelector((store)=>store.movies.movietrailer);
    
    //if(id==undefined) return ;

    async function getMovieTrailer(){
    const moviedata= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", apiOptions);
    
    const jsonMovie=await moviedata?.json();

    //it will print all videos related to movie
   
    const movieVideos=jsonMovie?.results;
    //adding trailer to redux store :: movieslice 
   // dispatch(addMovieTrailer(trailer));
   const filterTrailer=movieVideos?.filter((video)=>video.type=="Trailer");
    dispatch(addMovieTrailer(filterTrailer[0]));
}

useEffect(()=>{  getMovieTrailer();},[]);

}

export default useMovieTrailer;