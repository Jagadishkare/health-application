import UserInput from './userInput';
import {useState} from 'react';
import IEmailType from './types/emailType';
import {url} from '../../appliaction.json'
import { Link } from 'react-router-dom';

export default function NewPassword ({email} : IEmailType) {
    const [newDetails, setNewDetails] = useState({newPassword:"" , confirmPassword :""})

    function handleNewPasswordDetails (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
 //set dynamic readonly
        if(newDetails.newPassword===newDetails.confirmPassword){
            fetch(url.serverUrl).then((res)=>res.json()).then((result)=>{
                for(let i= 0 ; i< result.length ; i++){
                    if(result[i].userEmail===email){
                        if(result[i].userPassword===newDetails.newPassword){
                            alert("enter new password")
                        }else{
                        fetch(`${url.serverUrl}/${result[i].id}`,{method : "PUT", body : JSON.stringify({userEmail : result[i].userEmail, userPassword : newDetails.newPassword}),
                        headers : {"content-type" : "application/json"}}).then(()=> {
                            alert("Password changed....")
                            setNewDetails({...newDetails, newPassword :'', confirmPassword : ''})
                        })
                        }
                    }
                }
            })
        }else{
            alert("Match the password.......")
        }
    }

    return(
        <>
            <form onSubmit={(event)=>handleNewPasswordDetails(event)}>
                <UserInput content={"NEW PASSWORD : "} inputType={"password"} inputValue={newDetails.newPassword} inputPlaceholder={"Enter New Password"} 
                setFunction={(e)=>setNewDetails({...newDetails, newPassword: e.target.value})}/><br/>

                <UserInput content={"CONFIRM PASSWORD : "} inputType={"password"} inputValue={newDetails.confirmPassword} inputPlaceholder={"Confirm New Password"} 
                setFunction={(e)=>setNewDetails({...newDetails, confirmPassword: e.target.value})}/><br/>

                <button className="buttons">SUBMIT</button>
            </form>
        </>
    )
}