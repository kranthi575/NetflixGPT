import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const UpcomingMovies=()=>{

    const upcomingMovies=useSelector((appStore)=>{return appStore.secondCtrl.upcomingMovies});
    //early return
    if(upcomingMovies===null) return;
    
    return <>
        <div className=" h-[350px] mt-5  flex flex-col">
                <p className="text-white font-bold text-xl ml-2">Upcoming movies</p>
                <div className="flex overflow-y-hidden overflow-x-auto space-x-8 w-full bg-black">
                     {Array.isArray(upcomingMovies) && upcomingMovies.length > 0 ?(upcomingMovies.map((movie,index)=><MovieCard key={index} movie={movie}/>)):<MovieCard/>}
                </div>
                
            </div>
    </>

}
export default UpcomingMovies;