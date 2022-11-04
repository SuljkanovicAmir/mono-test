import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import AddNewMake from '../components/AddNewMake';
import AddNewModel from '../components/AddNewModel'
import CartImg from '../assets/images/cart.png'
import AddImg from '../assets/images/add.png'
import BurgerImg from '../assets/images/burger.png'
import CloseImg from '../assets/images/close.svg'


function Nav() {

  const [active, setActive] = useState(false)
  const [activeModel, setActiveModel] = useState(false)
  const [activeDropList, setActiveDropList] = useState(false)
  const [activeBurger, setActiveBurger] = useState(false)


  const handleMake = e => {
    setActive(current => !current);
  };

  const handleDropList = e => {
    setActiveDropList(current => !current);
  };

  const handleModel = e => {
    setActiveModel(current => !current);
  };

  const handleBurger = e => {
    setActiveBurger(current => !current);
  };
  
  
  

      return (
        <div  className="navContainer">
            <nav>   
              <NavLink activeclassname="active" className={"tab"} to="/home">CarShop</NavLink>
              <ul className={activeBurger ? 'ul-nav show' : 'ul-nav'}>
                <NavLink activeclassname="active" onClick={handleBurger} className={"nav-li home"} to="/home">Home</NavLink>
                <NavLink activeclassname="active" onClick={handleBurger} className={"nav-li"} to="/vehiclemake">Manufacturers</NavLink>
                <li className='nav-li'>
                  <img src={AddImg} onClick={e => handleDropList(e)} alt="add" />
                  <ul className={activeDropList ? 'add-cars show' : 'add-cars'}>
                    <li onClick={e => {handleModel(e); handleDropList(e)}} className='add-new-model nav-li'>New Model</li> 
                    <li onClick={e => {handleMake(e); handleDropList(e)}} className='add-new-vehicle nav-li'>New Vehicle</li> 
                  </ul>
                </li>
                <li className='nav-li cart'>
                  <img src={CartImg} alt='cart'/>
                </li>
                <button onClick={e => handleBurger(e)} className='closeInput'>
                  <img src={CloseImg} alt='search'/>
                </button>
              </ul>
            </nav>
            <div className='burger' onClick={handleBurger}>
                  <img src={BurgerImg} alt='cart'/>
            </div>
            <AddNewModel active={activeModel} handleClick={handleModel}/>
            <AddNewMake active={active} handleClick={handleMake} />
        </div>
      
      )
    }
    

export default Nav