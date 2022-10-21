import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';


function SortMake() {
  
  const handleSort = async (e) => {
        e.preventDefault();
        let value = e.target.value;
        VehicleStore.sortBy = value
        VehicleStore.getVehicles()
    }


  return (
    <div className='sortDiv'>
            <select
                onChange={(e) => handleSort(e)}
            >
                <option defaultValue value="name|asc" className='firstOption'>Sort</option>
                <option value="name|asc">Name (A-Z)</option>
                <option value="name|desc">Name (Z-A)</option>
            </select>
    </div>
  )
}

export default inject("VehicleStore")(observer(SortMake));
