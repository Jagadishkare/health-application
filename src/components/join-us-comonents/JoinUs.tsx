import './join-us.css'

export default function JoinUs() {
    return(
        <>
        <img src="/public/logo.jpg" alt="" className="logo" />
        <h1 className='heading'>JOIN TO FIT FOR LIFE</h1>
        <form action="">
            <label className="label" htmlFor="">EMAIL : </label>
            <input className="inputs" placeholder="Enter email" type="email" /><br></br>
            <label className="label" htmlFor="">PASSWORD : </label>
            <input className="inputs" placeholder="Enter password" type="email" /><br />
            <label className="label" htmlFor="">RE-ENTER PASSWORD : </label>
            <input className="inputs" placeholder="Confirm Password" type="email" /><br />
            <button className='buttons'>JOIN</button><br />
        </form>
        </>
        )
}