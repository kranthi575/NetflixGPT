import { useRef, useState } from "react";
import * as Constants from "../utils/constants";
import Header from "./Header";
import FormValidation from "../utils/FormValidation";
import { useNavigate } from "react-router-dom";
import auth from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";


const Login=()=>{


    const email=useRef();
    const password=useRef();
    const dispatch=useDispatch();

    const [formData,setFormData]=useState({uname:'',password:''});
    const [errorMsg,setErrorMsg]=useState(null);
    const [signIn,setsignIn]=useState(null);
    const [errorCode,seterrorCode]=useState(null);
    const navigate=useNavigate();

    function handleSignInSubmit(event){
        event.preventDefault();
        const message=FormValidation(null,email.current.value,password.current.value);
        console.log(message);
        setErrorMsg(message);
        if(message==null){
                
            const mail=email.current.value;
            const pwd=password.current.value;
            
            //verifying user to signIn
            signInWithEmailAndPassword(auth, mail, pwd)
            .then((userCredential) => {
              // Signed in 
              //set signin true
              setsignIn(true);
              
              console.log("sign success :: Login");

              //adding signuser into redux store user slice
              const user=auth.currentUser;
              const {uid,displayName,email}=user;
              console.log("updating redux from login :: using currentuser");
                console.log(user);
              //adding signin user data to redux store
    
                dispatch(addUser({uid:uid,displayName:displayName,email:email}));

            })
            .catch((error) => {
                setsignIn(false);
                console.log("error in sign success")
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorCode(errorCode);
              console.log(errorCode," : ",errorMessage)
            });
        }

        


    }

    function handleChange(event){

       setErrorMsg(null);

    };

    

    if(signIn){
            navigate('/browserHome');
    }
    return <>
   
    <div className="absolute">
        <img src={Constants.loginbgImg}></img>
    </div>
    <div className="relative">
    <div className=" w-[100px] h-[40px] ml-4">
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="h-8"></img>
    </div> 
    </div>
    <div className="relative bg-black border border-solid border-black rounded-md h-[500px] w-[350px] mt-[200px] ml-[500px] bg-opacity-60">    
    <form onSubmit={handleSignInSubmit} className="text-white space-y-4 flex flex-col">
            
            <p className="p-4 text-2xl font-bold">Sign In</p>
            
            <label className="m-4">Email</label>
            <input type="text" ref={email} onChange={handleChange} name="username" className="mb-4 ml-10 h-10 w-[200px] bg-gray-500 rounded-md"></input>
            <label></label>
            <label className="m-4">Password</label>
            <input type="password" ref={password} onChange={handleChange} name="password" className="ml-10 h-10 w-[200px] bg-gray-500 rounded-md"></input>
            {errorMsg!=null?<p className="font-bold text-red-600">{errorMsg}</p>:null}
            {signIn==false?<p>Incorrect username or password {errorCode}</p>:null}
            <button type="submit" className=" mt-8 ml-10 mb-3 p-4 bg-red-600 w-[200px] rounded-lg" >Sign In</button>
            <label className="ml-[130px]">or</label>
    </form>

    <button className=" ml-16 text-white bg-gray-400 h-10 w-[150px] rounded-lg" onClick={()=>{navigate('/register')}}>Sign Up</button>
    </div>
    </>

}
export default Login