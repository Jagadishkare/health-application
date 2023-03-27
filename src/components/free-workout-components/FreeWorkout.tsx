import './free-workout.css'
import { Link } from 'react-router-dom'
import {freeWorkout} from '../../appliaction.json'

export default function FreeWorkout () {
 return( 
    <>
      <h1 className='title'>FREE WORKOUT FOR YOU</h1>
      <div className="main-div">
         <div>
            <nav>
              <Link to='/gym' ><img className='workout-img' src="../../../public/gym workout.jpg" alt="" /></Link> 
            </nav>
            <h1 className='img-description'>GYM</h1>
         </div>
         <div>
            <nav>
               <Link to='/yoga'><img className='workout-img' src="../../../public/yoga.jpg" alt="" /></Link>
            </nav>
            <h1 className='img-description'>YOGA</h1>
         </div>
         <div>
            <nav>
               <Link to='/aerobics'><img className='workout-img' src="../../../public/aerobics.jpg" alt="" /></Link>
            </nav>
            <h1 className='img-description'>AEROBICS</h1>
         </div>
      </div>
      <div className="note">
         <p className='note-description'><b>NOTE : </b>{freeWorkout.freeWorkoutNote}</p>
      </div>
    </>
 )   
}