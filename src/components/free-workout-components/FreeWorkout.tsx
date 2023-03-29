import './free-workout.css'
import WorkoutCard from './workoutCard'
import Title from '../contact-components/title'
import Note from '../free-workout-components/note'


export default function FreeWorkout () {
 return( 
    <>
      <Title/>
      <div className="main-div">
         <WorkoutCard path={'/gym'} img={"../../../public/gym workout.jpg"} imgTitle={'GYM'} />
         <WorkoutCard path={'/yoga'} img={"../../../public/yoga.jpg"} imgTitle={'YOGA'} />
         <WorkoutCard path={'/aerobics'} img={"../../../public/aerobics.jpg"} imgTitle={'AEROBICS'} />
      </div>
      <Note/>
    </>
 )   
}