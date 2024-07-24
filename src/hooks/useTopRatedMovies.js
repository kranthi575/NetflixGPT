import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/secondCtrlSlice";

const useTopRatedMovies=()=>{

    const dispatch=useDispatch();
    async function fetchTopRatedMovies(){
        

        const topRatedMovies=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', apiOptions);
        const jsontopRatedMovies=await topRatedMovies.json();
        dispatch(addTopRatedMovies(jsontopRatedMovies.results));
    }
    useEffect(()=>{
        fetchTopRatedMovies();
    },[]);

}
export default useTopRatedMovies;