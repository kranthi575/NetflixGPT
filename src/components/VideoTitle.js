const VideoTitle=({original_title,overview})=>{

return (
    <div className="m-4 mt-10 ml-10"> 
        <h1 className="font-bold text-[30px]">{original_title}</h1>
        <p className="w-[500px]">{overview}</p>

    </div>
);
}
export default VideoTitle;