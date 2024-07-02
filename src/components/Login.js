import * as Constants from "../utils/constants";
import Header from "./Header";
const Login=()=>{


    
    function handleSubmit(){

    }
    return <>
    <Header/>
    <div >
        <img src={Constants.loginbgImg}></img>
    </div>
    <div>    
    <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="password"></input>
        </form>
    </div>
    </>

}
export default Login