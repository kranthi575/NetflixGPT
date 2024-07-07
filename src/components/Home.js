import * as Constants from "../utils/constants.js";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Home=()=>{


    const bg_img_url=Constants.loginbgImg;
    const navigate=useNavigate();
    return <>
             
            <div className="absolute">
           <img  src={bg_img_url} className="shadow-lg"></img>
           </div>
           <div className="relative ">
           <button className="absolute right-0 m-4 bg-red-600 text-sm text-white h-10 w-16 rounded-lg" onClick={()=>{navigate('/login')}}>Sign in</button>
           </div>
          
           <div className=" relative ">
                <p className="absolute  text-[40px] text-red-700"> Ultimate Entertainement</p>
           </div>
    </>

}
export default Home;