import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import BrowserHome from "./BrowserHome";
import { useEffect } from "react";
import auth from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../redux/userSlice";
const appRouter=createBrowserRouter(
  [
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/browserHome',
      element:<BrowserHome/>
    }
  ]); 

function Body() {

  console.log("Body component called")
  
  const dispatch=useDispatch();


  useEffect(()=>{
    console.log("BodyComponent useEffect");
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,displayName,email}=user;
          console.log("Body:: user signed in::");
            console.log(user);
          //adding signin user data to redux store

            dispatch(addUser({uid:uid,displayName:displayName,email:email}));
          // ...
        } else {
          // User is signed out
          console.log("Body:: user signout successfully!")
          // ...
          //removing user logout data from redux;
          dispatch(removeUser(null));
        }
      });
  },[]);
  return (
    <RouterProvider router={appRouter}/> 
  );
   }

export default Body;
