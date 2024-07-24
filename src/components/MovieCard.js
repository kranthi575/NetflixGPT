import {moviePosterBaseURL} from '../utils/constants';
const MovieCard=({movie})=>{

    if(movie===undefined)return;
    const movieimageUrl=movie.poster_path;
    const movieTitle=movie.original_title;
    
    console.log("movie param from movie card");
    console.log(movie);
    return<>
        <div className=" flex-shrink-0 m-5 h-[300px] w-[250px] border border-solid border-white ">
            <img className="w-full h-full " src={`${moviePosterBaseURL}${movieimageUrl}`}></img>
            <p className="text-white text-xl" >{movieTitle}</p>
        </div>
     </>

}
export default MovieCard;