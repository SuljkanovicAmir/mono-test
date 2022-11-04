import React, {useState} from 'react'
import { inject, observer } from 'mobx-react'
import VehicleModelStore from '../stores/VehicleModelStore'
import DropDown from '../assets/images/drop.png'


function SortModel() {

  const [isActive, setIsActive] = useState (false)
  const [selectedSort, setSelectedSort] = useState("Name (A-Z)")

  
  const handleSort = async (e) => {
        VehicleModelStore.sortBy = e
        VehicleModelStore.getVehicleModels()
    }

  const handleActive = e => {
    setIsActive(current => !current);
  };
    

  return (
    <div className='sortDiv'>
      <div className='selectWrapper'>
        <p>Sort</p>
       <div className='checkboxWrapper'>
          <div className='selected' onClick={() => handleActive()}>{selectedSort} 
              <img src={DropDown} className={ isActive ? 'selected-img active' : 'selected-img'} alt="drop down" />
          </div>
          <ul className={ isActive ? 'selectOptions active' : 'selectOptions '}>
            <li onClick={() => {handleSort("name|asc"); setSelectedSort('Name (A-Z)');  handleActive()}} className='select'>Name (A-Z)</li>
            <li onClick={() => {handleSort("name|desc"); setSelectedSort('Name (Z-A)');  handleActive()}} className='select'>Name (Z-A)</li>
          </ul>
       </div>
      </div>
    </div>
  )
}



export default inject("VehicleModelStore")(observer(SortModel));
