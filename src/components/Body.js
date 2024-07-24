import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import BrowserHome from "./BrowserHome";
import MovieCard from "./MovieCard";
import MovieCardClick from "./MovieCardClick";

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
    },
    {
      path:'/moviePage',
      element:<MovieCardClick/>
    },
    
  ]); 

function Body() {


  
  return (
    <RouterProvider router={appRouter}/> 
  );
   }

export default Body;
