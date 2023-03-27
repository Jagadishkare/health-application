import './contact.css'
import contactObject from './contact-details-config.json'

export default function Contact () {
    return(
        <>
            <h1 className="contact-title">CONTACT US FOR ANY HELP</h1>
            <h3 className="contact-title">ALWAYS READY TO HELP YOU</h3>
            <div className="contact">
                <div className="map-card">
                    <a href={contactObject.mapLink}><img className='map-image' src="../../../public/map.png" alt="" /></a>
                    <p className='img-tagline'>WE ARE AVAILABLE HERE FOR YOUR SERVICE</p>
                </div>
                <div className="contact-details">
                    <h2> ADDRESS : </h2>
                    <p className='address'>{contactObject.address}</p>
                    <h2> EMAIL : </h2>
                    <p className="email">{contactObject.email1}</p>
                    <p className="email">{contactObject.email2}</p>
                    <h2>CONTACT :</h2>
                    <p className="contact-number">{contactObject.contact}</p>
                </div>
            </div>
        </>
    )
}