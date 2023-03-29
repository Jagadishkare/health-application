import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Socialmedia () {
    return(
        <>
            <h1 className='find-us' >FOLLOW US NOW HERE FOR ANY UPDATES</h1>
            <div className="social-media">
                <p><InstagramIcon/>&nbsp;&nbsp; INSTA</p>
                <p><FacebookIcon/>&nbsp;&nbsp; FACEBOOK</p>
                <p><TwitterIcon/>&nbsp;&nbsp; TWITTER</p>
            </div>
        </>
    )
}