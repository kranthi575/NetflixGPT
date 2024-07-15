import { useEffect } from "react";
import auth from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header=()=>{

    console.log("Header component useEffect");
    const navigate=useNavigate();

    useEffect(()=>{

        

        onAuthStateChanged(auth, (user) => {
            if(user==null){
                console.log("active user is null :: redirecting to login page")
                    navigate('/login');
            }
            
          });
      },[]);
    return <>
    <div className="bg-black w-[100px] h-[40px] ml-4">
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="h-8"></img>
    </div> 
    </>
}
export default Header;