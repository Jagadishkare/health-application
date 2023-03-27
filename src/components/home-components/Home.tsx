import {Link} from 'react-router-dom'
import './home.css'
import homeObject from './partner-config.json'


export default function Home () {
    return (
        <>
            <h1 className="welcome-title">WELCOME TO FIT FOR LIFE</h1>
            <p className="home-description">We help individuals in managing their health and wellness. We help you achieve your health goals.</p>
            <p className="home-description">We have the best for you.</p>
            <nav>
                <Link to="/join-us"><button className="join-us">JOIN US</button></Link>
                <Link to="/sign-in"><button className="sign-in">SIGN IN</button></Link>
            </nav>
            <h1 className='partners'>PARTNERS</h1>
            <div className="partner-cards">
                <img className='partner-images' src={homeObject.cultFit} alt="" />
                <img className='partner-images' src={homeObject.patanjali} alt="" />
                <img className='partner-images' src={homeObject['health care']} alt="" />

            </div>
        </>
    )
}