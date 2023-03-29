import {freeWorkout} from '../../appliaction.json'


export default function Note () {
    return(
        <div className="note">
            <p className='note-description'><b>NOTE : </b>{freeWorkout.freeWorkoutNote}</p>
        </div> 
    )
}