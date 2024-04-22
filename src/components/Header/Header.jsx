import {useState} from 'react'
import FitnessFlow from "../../assets/FitnessFlowlogo.png"
import Bars from "../../assets/bars.png"
import {Link} from "react-scroll"
import "./Header.css"
const Header = () => {
  const mobile=window.innerWidth<=768 ? true : false
  const [menu,setMenu]=useState(false)
  return (
    <div className='Header'>
      <img className="logo" src={FitnessFlow} alt="Logo"
      />
      {(menu===false && mobile===true)? (
        <img src={Bars} alt="bar" 
        style={{width:"1.5rem", height:"1.5rem",cursor:"pointer"}}
          onClick={()=>setMenu(true)}
        />
      ):(
        <ul className='header-menu'>
          <li>
            <Link
            onClick={()=>setMenu(false)}
            activeClass='active'
            to="header"
            spy={true}
            smooth={true}
            >Home</Link>
          </li>
          <li>
            <Link
            onClick={()=>setMenu(false)}
                to="programs"
                spy={true}
                smooth={true}
            >
            Program
            </Link>
          </li>
          <li>
            <Link
            onClick={()=>setMenu(false)}
                to="Reasons"
                spy={true}
                smooth={true}
            >
            Why us
            </Link>
          </li>
          <li>
            <Link
            onClick={()=>setMenu(false)}
                to="plans"
                spy={true}
                smooth={true}
            >
            Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={()=>setMenu(false)}
              to="testimonials"
              spy={true}
              smooth={true}
              >Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header