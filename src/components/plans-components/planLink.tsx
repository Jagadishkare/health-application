import { Link } from "react-router-dom"


export default function PlanLink (props : any ) {
    return(
        <div>
            <nav>
                <Link to='/gold'><img className='plan-img' src={props.imgPath} alt="" /></Link>
            </nav>
            <h1>{props.membership}</h1>
        </div>
    )
}