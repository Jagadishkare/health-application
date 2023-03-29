import { Link } from 'react-router-dom'
import IWorkoutCard from './freeWorkoutType'



export default function WorkoutCard ({path, img, imgTitle }: IWorkoutCard) {
    return(
        <>
            <div>
                <nav>
                    <Link to={path} ><img className='workout-img' src={img} alt="" /></Link> 
                </nav>
                <h1 className='img-description'>{imgTitle}</h1>
            </div>
        </>
    )
}