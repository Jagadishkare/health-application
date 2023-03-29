import { Link } from 'react-router-dom'


export default function WorkoutCard (props : any) {
    return(
        <>
            <div>
                <nav>
                    <Link to={props.path} ><img className='workout-img' src={props.img} alt="" /></Link> 
                </nav>
                <h1 className='img-description'>{props.imgTitle}</h1>
            </div>
        </>
    )
}