import {Link} from 'react-router-dom'


export default function Button () {
    return(
        <>
             <nav>
                <Link to="/join-us"><button className="join-us">JOIN US</button></Link>
                <Link to="/sign-in"><button className="sign-in">SIGN IN</button></Link>
            </nav>
        </>
    )
}