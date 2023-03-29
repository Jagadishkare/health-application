import {plans} from '../../appliaction.json'


export default function Note () {
    return(
        <p className='discount'><b>NOTE : </b>{plans.note}</p>
    )
}