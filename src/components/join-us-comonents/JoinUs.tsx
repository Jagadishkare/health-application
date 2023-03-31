import {useState} from 'react'
import './join-us.css'
import {url} from '../../appliaction.json'
import UserInput from '../sign-in-components/userInput';

export default function JoinUs() {

    const [userDetails, setUserDetails] = useState({userEmail:'', userPassword:'', confirmPassword:''})

    const newUser = {
        userEmail : userDetails.userEmail,
        userPassword : userDetails.userPassword
    }

    function postData (url : string, type : object) {
        fetch(url, {method : "POST", body : JSON.stringify(type), headers : {"content-type" : "application/json"}})
        .then(()=>{alert("WELCOME TO FIT FOR LIFE")});
    }

    function handleNewUserDetails (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        if(userDetails.userEmail === '' && userDetails.confirmPassword === ''&& userDetails.confirmPassword === ''){
            alert("PLEASE PROVIDE YOUR DETAILS.....")
        }else{
            if(userDetails.userEmail && userDetails.userPassword && userDetails.userPassword === userDetails.confirmPassword){
            fetch(url.serverUrl).then((response)=>response.json()).then((result)=>{
                if(result.length === 0){
                    postData(url.serverUrl,newUser)
                }else{
                    let count = 0;
                    for(let i=0 ; i<result.length ; i++){
                        if(newUser.userEmail===result[i].userEmail){
                            count++;
                        }
                    }
                    if(count === 0){
                        postData(url.serverUrl,newUser)
                    } else{
                        alert("user already exists...try with other email...");
                    }                
                }
            })}else{
                alert("please match the password.....");
                }
            }
            setUserDetails({...userDetails, userEmail:'', userPassword: '', confirmPassword:''})
        }

    return(
        <>
            <img src="/public/logo.jpg" alt="" className="logo" />
            <h1 className='heading'>JOIN TO FIT FOR LIFE</h1>
            <form onSubmit={(event)=>handleNewUserDetails(event)}>
                <UserInput content={"EMAIL : "} inputType={"email"} inputValue={userDetails.userEmail} inputPlaceholder={"Enter Email.."} 
                setFunction={(e)=>setUserDetails({...userDetails, userEmail: e.target.value})}/><br/>

                <UserInput content={"PASSWORD : "} inputType={"password"} inputValue={userDetails.userPassword} inputPlaceholder={"Enter Password.."} 
                setFunction={(e)=>setUserDetails({...userDetails, userPassword: e.target.value})}/><br/>

                <UserInput content={"CONFIRM PASSWORD : "} inputType={"password"} inputValue={userDetails.confirmPassword} inputPlaceholder={"Re-Enter Password.."} 
                setFunction={(e)=>setUserDetails({...userDetails, confirmPassword: e.target.value})}/><br/>

                <button className='buttons'>JOIN</button><br />
            </form>
        </>
        )
}