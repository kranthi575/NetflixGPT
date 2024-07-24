import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const PopularMovies=()=>{


    const popularMovies=useSelector((appStore)=>{return appStore.secondCtrl.popularMovies});
    //early return
    if(popularMovies==null) return;
    console.log("popular movies from popular component");
    console.log(popularMovies)
    return <>
        <div className=" h-[350px] mt-5  flex flex-col">
                <p className="text-white font-bold text-xl ml-2">Popular movies</p>
                <div className="flex overflow-y-hidden overflow-x-auto space-x-8 w-full bg-black">
                     {Array.isArray(popularMovies) && popularMovies.length > 0 ?(popularMovies.map((movie,index)=><MovieCard key={index} movie={movie}/>)):<MovieCard/>}
                </div>
                
            </div>
    </>
}
export default PopularMovies;