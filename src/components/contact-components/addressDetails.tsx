import {contact} from '../../appliaction.json'


export default function AddressDetails () {
    return(
        <>
            <h2> ADDRESS : </h2>
            <p className='address'>{contact.address}</p>
            <h2> EMAIL : </h2>
            <p className="email">{contact.email1}</p>
            <p className="email">{contact.email2}</p>
            <h2>CONTACT :</h2>
            <p className="contact-number">{contact.contact}</p>
        </>
    )
}