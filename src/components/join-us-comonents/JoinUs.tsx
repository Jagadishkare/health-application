import { useRef} from 'react'
import './join-us.css'
import {url} from '../../appliaction.json'

export default function JoinUs() {

    const userEmail = useRef<HTMLInputElement>(null);
    const userPassword = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);
    let count = 0;

    function postData (url : string, type : object) {
        fetch(url, {method : "POST", body : JSON.stringify(type), headers : {"content-type" : "application/json"}})
        .then(()=>{alert("WELCOME TO FIT FOR LIFE")});
    }

    function handleNewUserDetails (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const newUser = {
            userEmail : userEmail.current?.value,
            userPassword : userPassword.current?.value
        }
        if(newUser.userEmail === '' && newUser.userPassword === ''){
            alert("PLEASE PROVIDE YOUR DETAILS.....")
        }else{
            if(newUser.userEmail && newUser.userPassword && newUser.userPassword === confirmPassword.current?.value){
            fetch(url.serverUrl).then((response)=>response.json()).then((result)=>{
                if(result.length === 0){
                    postData(url.serverUrl,newUser)
                }else{
                    for(let i=0 ; i<result.length ; i++){
                        if(newUser.userEmail===result[i].userEmail){
                            count++;
                        }
                    }
                    if(count === 0){
                        postData(url.serverUrl,newUser)
                    } else{
                        alert("user already exists...try with other email...");
                        count = 0;
                    }                
                }
            })}else{
                alert("please match the password.....");
                }
            }
        }

    return(
        <>
            <img src="/public/logo.jpg" alt="" className="logo" />
            <h1 className='heading'>JOIN TO FIT FOR LIFE</h1>
            <form onSubmit={(event)=>handleNewUserDetails(event)}>
                <label className="label" htmlFor="email">
                    EMAIL : 
                    <input className="inputs" autoComplete='off' name='email' placeholder="Enter email" type="email" ref={userEmail}/><br />
                </label>

                <label className="label" htmlFor="email">
                    PASSWORD : 
                    <input className="inputs" autoComplete='off' name='password' placeholder="Enter password" type="password" ref={userPassword} /><br />
                </label>

                <label className="label" htmlFor="email">
                    RE-ENTER PASSWORD :  
                    <input className="inputs" autoComplete='off' name='confirm-password' placeholder="Confirm Password" type="password" ref={confirmPassword} /><br />
                </label>
                <button className='buttons'>JOIN</button><br />
            </form>
        </>
        )
}