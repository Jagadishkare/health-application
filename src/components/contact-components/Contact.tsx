import './contact.css'
import Title from './title'
import GoogleMap from './googleMap'
import AddressDetails from './addressDetails'

export default function Contact () {
     
    return(
        <>
            <Title/>
            <div className="contact">
                <GoogleMap/>
                <div className="contact-details">
                    <AddressDetails/>    
                </div>
            </div>
        </>
    )
}