import { useNavigate } from "react-router-dom";
import auth from "../utils/firebase";
import { signOut } from "firebase/auth";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { removeUser } from "../redux/userSlice";
import { useEffect } from "react";

const BrowserHome=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    console.log("BrowserHome");

    //rendering user data from redux store
    const activeuser=useSelector((store)=>store.user.activeUser);
    console.log("active user from browseHome")
    console.log(activeuser);
    
    function handleSignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("signout successfully!");
            dispatch(removeUser(null));
            navigate('/')
          }).catch((error) => {
            // An error happened.
            console.log("error in signout");
          });
    }
    return <>
    
    <div className="bg-white flex justify-row space-x-[200px]">
            
    <Header/>
    <div className="flex justify-row">
        <ul className="flex justify-row space-x-[200px] m-4">
            <li>Home</li>
            <li>Browser</li>
            <li>Favorite</li>
            
        </ul>
        
    </div>
        <div className="m-4 ">
        <span className="border to-black">{activeuser?.displayName}</span>
           <button className="text-white bg-red-600 h-10 w-15 rounded-lg font-bold" onClick={handleSignOut}>SignOut</button>
        </div>

          

    </div>
    </>

}
export default BrowserHome;