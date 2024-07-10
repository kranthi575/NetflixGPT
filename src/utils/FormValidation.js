const  FormValidation=(username,email,password)=>{

    const emailRegx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, 
    //one special character, no space, and it must be 8-16 characters long.
    const passwordRegx=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    //user should contains minimum of 8 characters and includes alphabets and numericals
    const usernameRegx=/^[a-zA-Z0-9]{8,}$/;
    if(username!=null)
    {if(!usernameRegx.test(username)){
        return "entered username is not in valid format";
    }}
    if(!emailRegx.test(email)){
        return "entered email is not in valid format";
    }
    if(!passwordRegx.test(password)){
        return "entered password is not in valid format";
    }
    return null;
    
}
export default FormValidation;
