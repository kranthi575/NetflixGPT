import * as Constants from "../utils/constants.js";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Home=()=>{


    const bg_img_url=Constants.loginbgImg;
    const navigate=useNavigate();
    return <>
        <div>
            <div className="absolute">
                <img  src={bg_img_url} className="shadow-lg"></img>
           </div>
           <div className="relative  w-[100px] h-[40px] ml-4 top-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"></img>
           </div> 
           <div className="relative top-1">
           <button className="absolute right-0 mr-4 bg-red-600 text-sm text-white h-10 w-16 rounded-lg" onClick={()=>{navigate('/login')}}>Sign in</button>
           </div>
          
           <div className=" relative flex justify-center font-bold  top-[300px]  ">
                <p className="absolute  text-[40px] text-red-700 bg-white rounded-lg"> Welcome to Netflix!! Ultimate Entertainement</p>
           </div>
        </div>
    </>

}
export default Home;