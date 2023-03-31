import Logo from "./logo";
import UserInput from "./userInput";
import {useState} from "react"
import {url} from '../../appliaction.json'

export default function DeleteAccount () {

    const[userDetails, setUserDetails] = useState({userEmail:"", userPassword:""})

    function deleteAccountHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        if(userDetails.userEmail === '' && userDetails.userPassword === ''){
            alert("ENTER YOUR DETAILS.....")
        }else{
            fetch(url.serverUrl).then((element)=>element.json()).then((res)=>{
                let count = 0;
                for(let i=0 ; i<res.length ; i++){
                    if(userDetails.userEmail===res[i].userEmail){
                        if(userDetails.userPassword===res[i].userPassword){
                            fetch(`${url.serverUrl}/${res[i].id}`,{method : "DELETE"});
                            alert(` ${userDetails.userEmail} See you again....`);
                        }else{
                            alert("Wrong Password.....try again......");
                        }
                    }else{
                        count++;
                    }
                }
                if(count === res.length){
                    alert("SORRY....NO SUCH USER.....");
                }   
            })
        }
        setUserDetails({userEmail:'', userPassword:''})
    }

    return(
        <>
            <Logo/>
            <h1 className='delete-heading'>SORRY TO SEE YOU LEAVE....HOPE TO SEE YOU AGAIN..</h1>
            <form onSubmit={(event)=>deleteAccountHandler(event)}>
                <UserInput content={"EMAIL : "} inputType={"email"} inputValue={userDetails.userEmail} inputPlaceholder={"Enter Email"} 
                setFunction={(e)=>setUserDetails({...userDetails, userEmail: e.target.value})}/><br/>

                <UserInput content={"PASSWORD : "} inputType={"password"} inputValue={userDetails.userPassword} inputPlaceholder={"Enter Password"} 
                setFunction={(e)=>setUserDetails({...userDetails, userPassword: e.target.value})}/><br/>
                
                <button className='buttons'>DELETE ACCOUNT</button>
            </form>
        </>
        )
}