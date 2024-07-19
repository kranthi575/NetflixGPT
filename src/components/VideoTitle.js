const VideoTitle=({original_title,overview})=>{

return (
    <div className=" absolute inset-0 m-4 mt-[300px] "> 
        <h1 className="font-bold  text-white text-[80px]">{original_title}</h1>
        <p className=" text-white w-[500px]">{overview}</p>
        <button className="border border-solid black w-28 h-10 space-x-4 bg-white text-black font-bold"> ▶️ Play</button>
        <button className="border border-solid black w-28 h-10 space-x-4 text-white font-bold">More info</button>

    </div>
);
}
export default VideoTitle;