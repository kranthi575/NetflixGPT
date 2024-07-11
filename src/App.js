import Login from './components/Login';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import BrowserHome from './components/BrowserHome';
import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import auth from './utils/firebase';
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

function App() {

  return (
    <RouterProvider router={appRouter}/> 
  );
   }

export default App;
