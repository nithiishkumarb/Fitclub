import "./Programs.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
const Programs = () => {
  return (
    <div className="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((programsData,index)=>(
                <div className="category" key={index}>
                    {programsData.image}
                    <span>{programsData.heading}</span>
                    <span>{programsData.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt=""/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs