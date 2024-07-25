import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const TopRatedMovies=()=>{

    const topratedMovies=useSelector((appStore)=>{return appStore.secondCtrl.topratedMovies});
    //early return
    //console.log("Top rated early return");
    if(topratedMovies===null) return;
    //console.log("toprated not early return");
    
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