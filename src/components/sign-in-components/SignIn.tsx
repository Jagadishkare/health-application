import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign-in.css'
import IData from './types/signinType';
import Logo from './logo';
import {url} from '../../appliaction.json'
import UserInput from './userInput';
let count :number = 0;

export default function SignIn() {
    const [signInDetails , setSignInDetails] = useState({email:'', password:''})
    function handleUserDetails (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const newUser = {
            userEmail : signInDetails.email,
            userPassword : signInDetails.password,
        }

        if(newUser.userEmail === '' && newUser.userPassword === ''){
            alert("ENTER YOUR DETAILS.....")
        }else{
            fetch(url.serverUrl).then((element)=>element.json()).then((res)=>{
                count = 0;
                res.map((elem:IData)=>{
                    if(newUser.userEmail===elem.userEmail){
                        if(newUser.userPassword===elem.userPassword){
                            alert(` ${signInDetails.email} Welcome to FIT FOR LIFE....`);
                        }else{
                            alert("Wrong Password.....try again......");
                        }
                    }else{
                        count++;
                    }
                })
                if(count === res.length){
                    alert("PLEASE SIGN-UP FIRST.....");
                }   
            })
        }
        setSignInDetails({email:'', password:''})
    }
    return(
        <>
            <Logo/>
            <h1 className='heading'>SIGN-IN TO FIT FOR LIFE</h1>
            <form onSubmit={(event)=>handleUserDetails(event)}>
                <UserInput content={"EMAIL : "} inputType={"email"} inputValue={signInDetails.email} inputPlaceholder={"Enter Email"} 
                setFunction={(e)=>setSignInDetails({...signInDetails, email: e.target.value})}/><br/>

                <UserInput content={"PASSWORD : "} inputType={"password"} inputValue={signInDetails.password} inputPlaceholder={"Enter Password"} 
                setFunction={(e)=>setSignInDetails({...signInDetails, password: e.target.value})}/><br/>

                <button className='buttons'>SIGN IN</button><br />
                <Link to='/forgotPassword'><button className='buttons'>FORGOT PASSWORD</button></Link>
                
                <Link to='/deleteAccount'><button className='delete-buttons'>DELETE ACCOUNT</button></Link>
            </form>
        </>
        )
}