import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MovieCard from "./MovieCard";

const TopRatedMovies=()=>{

    const topratedMovies=useSelector((appStore)=>{return appStore.secondCtrl.topratedMovies});
    //early return
    if(topratedMovies==null) return;
    
    return <>
        <div className=" h-[350px] mt-5  flex flex-col">
                <p className="text-white font-bold text-xl ml-2">Top Rated movies</p>
                <div className="flex overflow-y-hidden overflow-x-auto space-x-8 w-full bg-black">
                     {Array.isArray(topratedMovies) && topratedMovies.length > 0 ?(topratedMovies.map((movie,index)=><MovieCard key={index} movie={movie}/>)):<MovieCard/>}
                </div>
                
            </div>
    </>
}
export default TopRatedMovies;