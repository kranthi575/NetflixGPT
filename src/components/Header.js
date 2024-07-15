import { useEffect } from "react";
import auth from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../redux/userSlice";
const Header=()=>{

    //console.log("Header component useEffect");
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const activeuser=useSelector((store)=>store.user.activeUser);
    console.log("active user from Header::")
    console.log(activeuser);
    useEffect(()=>{

        

        onAuthStateChanged(auth, (user) => {
            if(user==null){
                console.log("active user is null :: redirecting to login page")
                    navigate('/login');
            }
            
          });
      },[]);

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
   

    <div className="bg-white flex flex-row justify-between">     
    <div className="bg-black w-[100px] h-[40px] ml-4">
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="h-8"></img>
    </div> 
    <div className="m-4 ">
        <span className="border to-black">{activeuser?.displayName}</span>
           <button className="text-white bg-red-600 h-10 w-15 rounded-lg font-bold" onClick={handleSignOut}>SignOut</button>
    </div>
    </div>
    
    <div> </div>
    </>
}
export default Header;