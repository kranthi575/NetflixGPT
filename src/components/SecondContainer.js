import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";

const SecondContainer=()=>{


    
  
    return <>
    {/*the is the main div hold background black**/}
    <div className="absolute flex flex-col  bg-black w-full space-y-2 scrollbar-hide">
            {/* this is the main div which holds the movie cards **/ }
            
            <PopularMovies/>
            <TopRatedMovies/>
    
    </div>
    </>

}
export default SecondContainer;