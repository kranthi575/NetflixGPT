import { Link } from "react-router-dom";
import HomeHeader from "../Homepage/HomeHeader";
import Header from "./Header";

const BrowserHome=()=>{

    console.log("BrowserHome");
    return <>
    <div className="bg-white flex justify-row space-x-[200px]">
            
    <div className="bg-black w-[100px] h-[40px] ml-4">
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="h-8"></img>
    </div> 
    <div className="flex justify-row">
        <ul className="flex justify-row space-x-[200px] m-4">
            <li>Home</li>
            <li>Browser</li>
            <li>Favorite</li>
            
        </ul>
        
    </div>
        <div className="m-4 space-x-[200px]">
           <button className="text-white bg-red-600 h-10 w-15 rounded-lg font-bold">SignOut</button>
        </div>
          

    </div>
    </>

}
export default BrowserHome;