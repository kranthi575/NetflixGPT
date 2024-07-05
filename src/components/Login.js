import { useState } from "react";
import * as Constants from "../utils/constants";
import Header from "./Header";
import Link from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{

    const [formData,setFormData]=useState({uname:'',password:''});
    const navigate=useNavigate();
    function handleSubmit(event){
        event.preventDefault();

    }

    function handleChange(event){

        const {name,value}=event.target;

        setFormData({...formData,[name]:value});

    };

    function handleSubmit(event){
        event.preventDefault();
        console.log("Form submitted!!",formData);
        alert("Form submitted successfully!!");
        setFormData({uname:'',password:''});
    }
    return <>
    <Header/>
    <div className="absolute">
        <img src={Constants.loginbgImg}></img>
    </div>
    <div className="relative bg-black border border-solid border-black rounded-md h-[450px] w-[300px] mt-[200px] ml-[500px] bg-opacity-60">    
    <form onSubmit={handleSubmit} className="text-white space-y-4 flex flex-col">
            
            <p className="p-4 text-2xl">Sign In</p>
            
            <label className="m-4">Email</label>
            <input type="text" onChange={handleChange} name="username" className="mb-4 ml-4 h-10 w-[200px] bg-gray-500"></input>
            <label></label>
            <label className="m-4">Password</label>
            <input type="password" onChange={handleChange} name="password" className="ml-4 h-10 w-[200px] bg-gray-500"></input>
            <button type="submit" className=" mt-8 ml-10 mb-3 p-4 bg-red-600 w-[200px] rounded-lg" >Sign In</button>
            <label className="ml-[130px]">or</label>
    </form>

    <button className=" ml-16 text-white bg-gray-400 h-10 w-[150px] rounded-lg" onClick={()=>{navigate('/register')}}>Sign Up</button>
    </div>
    </>

}
export default Login