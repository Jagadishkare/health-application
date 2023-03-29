import { useRef} from 'react'
import './join-us.css'

export default function JoinUs() {

    const userEmail = useRef<HTMLInputElement>(null);
    const userPassword = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);
    let count = 0;

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
            fetch("http://localhost:3000/users").then((response)=>response.json()).then((result)=>{
                if(result.length === 0){
                    fetch("http://localhost:3000/users", {method : "POST", body : JSON.stringify(newUser), headers : {"content-type" : "application/json"}})
                    .then(()=>{alert("WELCOME TO FIT FOR LIFE")});
                }else{
                    for(let i=0 ; i<result.length ; i++){
                        if(newUser.userEmail===result[i].userEmail){
                            count++;
                        }
                    }
                    if(count === 0){
                        fetch("http://localhost:3000/users", {method : "POST", body : JSON.stringify(newUser), headers : {"content-type" : "application/json"}})
                        .then(()=>{alert("WELCOME TO FIT FOR LIFE")});
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
                <label className="label" htmlFor="email">EMAIL : </label>
                <input className="inputs" name='email' placeholder="Enter email" type="email" ref={userEmail}/><br></br>

                <label className="label" htmlFor="password">PASSWORD : </label>
                <input className="inputs" name='password' placeholder="Enter password" ref={userPassword} type="password" /><br />

                <label className="label" htmlFor="confirm-password">RE-ENTER PASSWORD : </label>
                <input className="inputs" name='confirm-password' placeholder="Confirm Password" type="password" ref={confirmPassword} /><br />
                <button className='buttons'>JOIN</button><br />
            </form>
        </>
        )
}