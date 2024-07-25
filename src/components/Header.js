import { useEffect } from "react";
import auth from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../redux/userSlice";
import UseNowplaying from "../hooks/useNowplaying";
const Header=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const activeuser=useSelector((store)=>store.user.activeUser);

    
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user==null){
                 navigate('/login');
            }else{
                const user=auth.currentUser;
              const {uid,displayName,email}=user;
              //adding signin user data to redux store
    
                dispatch(addUser({uid:uid,displayName:displayName,email:email}));

                // //redirecting to browseHome
                // navigate('/browserHome')
            }
            
          });
          // Unsiubscribe when component unmounts
        return () => unsubscribe();
      },[]);

      function handleSignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser(null));
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }

   // useEffect(()=>{UseNowplaying();},[]);

    return <>
   

    <div className="bg-black  fad flex flex-row justify-between  border bottom-4 border-black">     
        <Link to="../browserHome">
        <div className=" w-[100px] h-[40px] m-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="h-8"></img>
        </div> 
        </Link>
        <div className="m-4 space-x-1 ">
            <span className="border rounded-sm text-white to-white">{activeuser?.displayName}</span>
            <button className="text-white bg-red-600 h-10 w-15 rounded-lg font-bold" onClick={handleSignOut}>SignOut</button>
        </div>
    </div>
    
   
    </>
}
export default Header;