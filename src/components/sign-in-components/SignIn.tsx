import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign-in.css'
import IData from './signinType';
import {url} from '../../appliaction.json'
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
                            alert(`Welcome ${signInDetails.email} to FIT FOR LIFE....`);
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
            <img src="/public/logo.jpg" alt="" className="logo" />
            <h1 className='heading'>SIGN-IN TO FIT FOR LIFE</h1>
            <form onSubmit={(event)=>handleUserDetails(event)} action="">
                <label className="label" htmlFor="email">EMAIL : </label>
                <input className="inputs" autoComplete='off' name='email'onChange={(e)=>setSignInDetails({...signInDetails, email: e.target.value})} 
                    placeholder="Enter email" type="email" value={signInDetails.email} /><br />

                <label className="label" htmlFor="password">PASSWORD : </label>
                <input className="inputs" autoComplete='off' name='password' value={signInDetails.password}
                 placeholder="Enter password" type="password" onChange={(e)=>setSignInDetails({...signInDetails, password: e.target.value})}/><br />

                <button className='buttons'>sign in</button><br />
                <Link to='/forgotPassword'><button className='buttons'>forgot password</button></Link>
            </form>
        </>
        )
}