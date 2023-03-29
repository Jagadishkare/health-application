import Note from './note'
import './plan.css'
import PlanLink from './planLink'
import Title from './title'

export default function Plans () {
    return (
        <>
            <Title/>
            <div className="plan-main-div">
                <PlanLink imgPath={"../../../public/platinum.jpg"} membership={"Platinum membership"}/>
                <PlanLink imgPath={"../../../public/gold.jpg"} membership={"Gold membership"}/>
                <PlanLink imgPath={"../../../public/silver.jpg"} membership={"Silver membership"}/>
            </div>
            <Note/>
        </>
    )
}