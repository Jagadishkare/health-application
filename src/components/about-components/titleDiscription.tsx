import {about} from '../../appliaction.json'


export default function TitleDiscription () {
    return(
        <>
            <h1 className='about-title'>ABOUT US</h1>
            <p className='about-description'>{about.aboutParagraph}</p>
        </>
    )
}