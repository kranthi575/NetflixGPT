import Login from './components/Login';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';

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
    }
  ]); 

function App() {


  
  return (
    <RouterProvider router={appRouter}/> );
   }

export default App;
