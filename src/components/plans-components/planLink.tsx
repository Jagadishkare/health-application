import { Link } from "react-router-dom"
import IPlanLink from "./planTypes"

export default function PlanLink ({imgPath ,membership } : IPlanLink ) {
    return(
        <div>
            <nav>
                <Link to='/gold'><img className='plan-img' src={imgPath} alt="" /></Link>
            </nav>
            <h1>{membership}</h1>
        </div>
    )
}