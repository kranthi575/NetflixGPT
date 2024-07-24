import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/secondCtrlSlice";
import { apiOptions } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies=()=>{

    const dispatch=useDispatch();
    async function fetchUpcomingMovies(){
        

        const upcomingMovies=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', apiOptions);
        const jsonUpcomingMovies=await upcomingMovies.json();
        dispatch(addUpcomingMovies(jsonUpcomingMovies.results));
    }
    useEffect(()=>{
        fetchUpcomingMovies();
    },[]);

}
export default useUpcomingMovies;