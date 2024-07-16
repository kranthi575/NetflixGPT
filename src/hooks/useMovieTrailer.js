import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addMovieTrailer } from "../redux/movieSlice";
import { useEffect } from "react";
const useMovieTrailer=({id})=>{

    console.log("movieID;",id)
   const dispatch=useDispatch();

    async function getMovieTrailer(){
    const moviedata= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", apiOptions)
    
    const json=await moviedata.json();

    console.log("movie data")
    //it will print all videos related to movie
    console.log(json);

    //filter only trailer
    const filterData=json.results.filter((video)=>video.type==="Trailer");
    //if movie has multiple trailers
    const trailer=filterData.length?filterData[0]:json.results[0];

    console.log("trailer")
    console.log(trailer);

    //adding trailer to redux store :: movieslice 
    dispatch(addMovieTrailer(trailer));
    
}

useEffect(()=>{getMovieTrailer();},[]);

}

export default useMovieTrailer;