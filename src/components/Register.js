import Header from "./Header";
import * as Constants from "../utils/constants";
import { useState } from "react";
const Register=()=>{

    const [formData,setFormData]=useState({});

    function handleChange(event){

        const {name,value}=event.target;

        setFormData({...formData,[name]:value});


    }

    function handleSubmit(event){
       event.preventDefault(); 
       alert('Registered successfully!');
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
                    <input type="text" onChange={handleChange} name="username"  className="mb-4 ml-4 h-10 w-[200px] bg-gray-500 rounded-lg text-white"></input>
                    <label></label>
                    <label className="m-4">Email</label>
                    <input type="text" onChange={handleChange} name="email"  className="mb-4 ml-4 h-10 w-[200px] bg-gray-500 rounded-lg"></input>
                    
                    <label className="m-4">Password</label>
                    <input type="password" onChange={handleChange} name="password"  className="ml-4 h-10 w-[200px] bg-gray-500 rounded-lg"></input>
                    <button className=" ml-16 text-white bg-red-700 h-10 w-[150px] rounded-lg" type="submit" >Sign Up</button>
            </form>

            </div>
    </>

}
export default Register;