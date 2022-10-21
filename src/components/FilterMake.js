import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';

function FilterMake() {
  const { vehicleData } = VehicleStore;

  const handleFilter = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    VehicleStore.searchQuery = `WHERE name ='${value}'`
    VehicleStore.getVehicles()
}

const handleReset = (e) => {
  e.preventDefault();
  VehicleStore.searchQuery = null;
  VehicleStore.getVehicles()
};


  return (
    <div className='filterDiv'>
            <select
                onChange={(e) => handleFilter(e)}
            >
              <option defaultValue value={""} className='firstOption'>Filters</option>
            {vehicleData.map ((item, index) => (
              <option value={item.name} key={index}>{item.name}</option>
            ))};   
            </select>
            <button  onClick={handleReset}>Reset Filter</button>
    </div>
  )
}

export default inject("VehicleStore")(observer(FilterMake));
