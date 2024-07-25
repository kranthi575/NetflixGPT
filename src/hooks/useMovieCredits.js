import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCurrentPlayingMovieCredits } from "../redux/secondCtrlSlice";

const useMovieCredits=(id)=>{

    const dispatch=useDispatch();
    
    
    //calling fetch method to retrive currrent playng movie credits
    async function fetchMovieCredits(){

        const movieCreditsData=await fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?language=en-US", apiOptions)
        const jsonmovieCreditsData=await movieCreditsData.json();

       // console.log("jsonmoviecredits data ");
        //console.log(jsonmovieCreditsData);
        //adding current playing movie credits
        dispatch(addCurrentPlayingMovieCredits(jsonmovieCreditsData));

    }
    useEffect(()=>{fetchMovieCredits();},[]);
    //early return
    if(id===null || id===undefined)return <p>Invalid movie id</p>;


}
export default useMovieCredits;