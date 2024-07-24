import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/secondCtrlSlice";

const usePopularMovies=()=>{


    const dispatch=useDispatch();

    async function fetchpopularMovies(){
        //fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
 
        const fetchPopularMovies =await  fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', apiOptions);

        const jsonPopularMovies=await fetchPopularMovies?.json();

        
        dispatch(addPopularMovies(jsonPopularMovies?.results));
    }


    useEffect( ()=>{

        //calling popular movies api 

        fetchpopularMovies();
          


    },[]);
    

}
export default usePopularMovies;