import {contact} from '../../appliaction.json'


export default function GoogleMap () {
    return(
        <div className="map-card">
            <a href={contact.mapLink}><img className='map-image' src="../../../public/map.png" alt="" /></a>
            <p className='img-tagline'>WE ARE AVAILABLE HERE FOR YOUR SERVICE</p>
        </div>
    )
}