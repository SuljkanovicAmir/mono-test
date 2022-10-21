import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import AddNewMake from '../components/AddNewMake';


function Nav() {

  const [active, setActive] = useState(false)

  const handleClick = e => {
    setActive(current => !current);
  };
  

      return (
        <div  className="navContainer">
            <nav>
              <ul className={'ul-nav'}>
                <NavLink activeclassname="active" className={"tab"} to="/home">Home</NavLink>
              </ul>
            </nav>
            <button onClick={e => handleClick()} className='addNewVehicle'>Add Vehicle</button> 
            <AddNewMake active={active} handleClick={handleClick} />
        </div>
      
      )
    }
    

export default Nav