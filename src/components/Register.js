import Header from "./Header";
import * as Constants from "../utils/constants";
import { useState,useRef, } from "react";
import FormValidation from "../utils/FormValidation";
import { useNavigate } from "react-router-dom";
import auth from "../utils/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const Register=()=>{




    const email=useRef();
    const password=useRef();
    const username=useRef(); 
    const navigate=useNavigate();

    const [errorCode,seterrorCode]=useState(null);
    const [formData,setFormData]=useState({username:'',email:'',password:''});
    const [errorMsg,setErrorMsg]=useState(null);
    const [regSuccess,setregSuccess]=useState(null);

    function handleChange(event){
        setErrorMsg(null);
    }
    function handleSubmit(event){
       event.preventDefault(); 
       const errorMsg = FormValidation(username.current.value,email.current.value,password.current.value);
    
       setErrorMsg(errorMsg);
      
      console.log(errorMsg);
      if(errorMsg==null){
        const uname=username.current.value;
        const mail=email.current.value;
        const pwd=password.current.value;
        console.log("no errors in data")
        const formdata={username:uname,email:mail,password:pwd};
        console.log(formdata);
        setFormData({username:uname,email:mail,password:pwd})

        //creating user into firebase
        createUserWithEmailAndPassword(auth, mail, pwd)
                .then((userCredential) => {
                    // Signed up 
                    const {uid} = userCredential.user;
                    //updating user with displayname
                    console.log("creating user::")    
                           
                    setregSuccess(true);
        
                    
                })
                .catch((error) => {
                   const  errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("setting regsucess false");
                    setregSuccess(false);
                    seterrorCode(errorCode);
                    console.log(errorCode," : ",errorMessage)
                    // ..
                });
                    }
       
    }
    return <>
           <Header/>
            <div className="absolute">
                <img src={Constants.loginbgImg}></img>
            </div>
            <div className="relative bg-black border border-solid border-black rounded-md h-[500px] w-[300px] mt-[200px] ml-[500px] bg-opacity-60">    
            <form onSubmit={handleSubmit} className="text-white space-y-2 flex flex-col">
                    
                    <p className="p-4 text-2xl">Sign Up</p>
                    
                    <label className="m-4">Username</label>
                    <input type="text" ref={username}  name="username" onChange={handleChange} className="mb-4 ml-4 h-10 w-[200px] bg-gray-500 rounded-lg text-white"></input>
                    <label></label>
                    <label className="m-4">Email</label>
                    <input type="text" ref={email}  name="email" onChange={handleChange} className="mb-4 ml-4 h-10 w-[200px] bg-gray-500 rounded-lg"></input>
                    
                    <label className="m-4">Password</label>
                    <input type="password" ref={password}  name="password" onChange={handleChange} className="ml-4 h-10 w-[200px] bg-gray-500 rounded-lg"></input>
                    <button className=" ml-16 text-white bg-red-700 h-10 w-[150px] rounded-lg " type="submit" >Sign Up</button>
                    {errorMsg?<p className="text-red-700 font-bold">{errorMsg}</p>:null}
                    {regSuccess==true?<p className="text-white font-bold">user registered successfully!</p>:null}
                    {regSuccess==false?<p className="text-white font-bold">Error in registering user!! {errorCode}</p>:null}
                    </form>
               <button className=" ml-16 text-white bg-red-700 h-10 w-[150px] rounded-lg mt-5" onClick={()=>{navigate('/login')}}>back to SignIn</button>     
            </div>
    </>

}
export default Register;