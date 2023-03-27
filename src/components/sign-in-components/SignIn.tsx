import './sign-in.css'

export default function SignIn() {
    return(
        <>
        <img src="/public/logo.jpg" alt="" className="logo" />
        <h1 className='heading'>SIGN-IN TO FIT FOR LIFE</h1>
        <form action="">
            <label className="label" htmlFor="">EMAIL : </label>
            <input className="inputs" placeholder="Enter email" type="email" /><br></br>
            <label className="label" htmlFor="">PASSWORD : </label>
            <input className="inputs" placeholder="Enter password" type="email" /><br />
            <button className='buttons'>sign in</button><br />
            <button className='buttons'>forgot password</button>
        </form>
        </>
        )
}