import './plan.css'
import { Link } from "react-router-dom"
import planObject from './plan-config.json'

export default function Plans () {
    return (
        <>
            <h1 className='plan-title'>PLANS FOR YOU</h1>
            <div className="plan-main-div">
                <div>
                    <nav>
                        <Link to='/platinum'><img className='plan-img' src="../../../public/platinum.jpg" alt="" /></Link>
                    </nav>
                    <h1>Platinum membership</h1>
                </div>
                <div>
                    <nav>
                        <Link to='/gold'><img className='plan-img' src="../../../public/gold.jpg" alt="" /></Link>
                    </nav>
                    <h1>Gold membership</h1>
                </div>
                <div>
                    <nav>
                        <Link to='/silver'><img className='plan-img' src="../../../public/silver.jpg" alt="" /></Link>
                    </nav>
                    <h1>Silver membership</h1>
                </div> 
            </div>
            <p className='discount'><b>NOTE : </b>{planObject.discount}</p>
        </>
    )
}