import Header from "./Header";
import * as Constants from "../utils/constants";
import { useState,useRef, } from "react";
import FormValidation from "../utils/FormValidation";
import { useNavigate } from "react-router-dom";
const Register=()=>{


    const email=useRef();
    const password=useRef();
    const username=useRef(); 

    const navigate=useNavigate();

    const [formData,setFormData]=useState({});
    const [error,setError]=useState(null);

    function handleRedirect(){

    }
    function handleChange(event){

        const {name,value}=event.target;
        setError(null);
        setFormData({...formData,[name]:value});


    }

    function handleSubmit(event){
       event.preventDefault(); 
      const errorMsg = FormValidation(username.current.value,email.current.value,password.current.value);
    
        setError(errorMsg);
      
      console.log(errorMsg);
      //alert('Registered successfully!');
       console.log(formData);
       setFormData({Username:'',Email:'',Password:''});
    }


    return <>
       <Header/>
            <div className="absolute">
                <img src={Constants.loginbgImg}></img>
            </div>
            <div className="relative bg-black border border-solid border-black rounded-md h-[450px] w-[300px] mt-[200px] ml-[500px] bg-opacity-60">    
            <form onSubmit={handleSubmit} className="text-white space-y-2 flex flex-col">
                    
                    <p className="p-4 text-2xl">Sign Up</p>
                    
                    <label className="m-4">Username</label>
                    <input type="text" ref={username} onChange={handleChange} name="username"  className="mb-4 ml-4 h-10 w-[200px] bg-gray-500 rounded-lg text-white"></input>
                    <label></label>
                    <label className="m-4">Email</label>
                    <input type="text" ref={email} onChange={handleChange} name="email"  className="mb-4 ml-4 h-10 w-[200px] bg-gray-500 rounded-lg"></input>
                    
                    <label className="m-4">Password</label>
                    <input type="password" ref={password} onChange={handleChange} name="password"  className="ml-4 h-10 w-[200px] bg-gray-500 rounded-lg"></input>
                    <button className=" ml-16 text-white bg-red-700 h-10 w-[150px] rounded-lg" type="submit" >Sign Up</button>
                    {error?<p className="text-red-700">{error}</p>:null}
                    {!error? ()=>{navigate('/browserHome')}:null}
            </form>
                    
            </div>
    </>

}
export default Register;