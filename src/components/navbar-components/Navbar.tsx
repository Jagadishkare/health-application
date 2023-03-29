import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar () {
    return(
        <>
           <div >
                <nav className='navbar'>
                    <Link className='links' to='/'>HOME</Link>
                    <Link className='links' to='/about'>ABOUT</Link>
                    <Link className='links' to='/contact'>CONTACT</Link>
                    <Link className='links' to='/plans'>PLANS</Link>
                    <Link className='links' to='/freeWorkout'>FREE WORKOUT</Link>
                </nav>    
           </div>
        </>
    )
}