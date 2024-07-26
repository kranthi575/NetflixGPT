import { Link, useSearchParams } from 'react-router-dom';
import {moviePosterBaseURL} from '../utils/constants';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCurrentPlayingMovieCredits } from '../redux/secondCtrlSlice';
const MovieCard=({movie})=>{

     const dispatch=useDispatch();
    //removing currentplaying movie credits
    //befoore that we need to read the current playing movie details
    const currentMovieCredits=useSelector((appStore)=>appStore.secondCtrl.currentPlayingMovieCredits);
    if(currentMovieCredits!=null){
     dispatch(removeCurrentPlayingMovieCredits(null));
    }
    if(movie===undefined)return;
    const movieimageUrl=movie.poster_path;
    const movieTitle=movie.original_title;
    return<>
      <Link to='/moviePage' state={movie}>  
            <div className=" flex-shrink-0 m-5 h-[300px] w-[250px] border border-solid border-white">
                    <img className="w-full h-full " src={`${moviePosterBaseURL}${movieimageUrl}`}></img>
                    
             </div>
        </Link>
     </>

}
export default MovieCard;