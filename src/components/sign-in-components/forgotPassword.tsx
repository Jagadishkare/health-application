import {useState} from 'react'
import {url} from '../../appliaction.json'
import Home from '../home-components/Home';
import Logo from "./logo";
import NewPassword from './newPassword';
import IData from './types/signinType';
import UserInput from './userInput';
let count : number = 0;


export default function ForgotPassword () {
    const [forgotDetailsEmail , setForgotDetails] = useState('');
    const [isCorrect, setIsCorrect] = useState(false)

    function forgotDetailsHandler (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();


        if(forgotDetailsEmail === ''){
            alert("ENTER YOUR DETAILS.....")
        }else{
            fetch(url.serverUrl).then((element)=>element.json()).then((res)=>{
                count = 0;
                res.map((elem:IData)=>{
                    if(forgotDetailsEmail===elem.userEmail){
                        setIsCorrect(true)
                    }else{
                        count++;
                    }
                })
                if(count === res.length){
                    alert("USER NOT FOUND.....");
                }   
            })
        }
        }
    
    return(
        <>
            <Logo/>
            <h1 className='heading'>FORGOT PASSWORD </h1>
            <form onSubmit={(event)=>{forgotDetailsHandler(event)}}>
                <UserInput content={"EMAIL : "} inputType={"email"} inputValue={forgotDetailsEmail} inputPlaceholder={"Enter Email"} 
                setFunction={(e)=>setForgotDetails(e.target.value)}/><br/>
                <button className="buttons">CHANGE PASSWORD</button><br/>
            </form>
            {
                isCorrect ?  <NewPassword email = {forgotDetailsEmail} /> : ""
            }
        </>
    )
}