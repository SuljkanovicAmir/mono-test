import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';
import VehicleModelStore from '../stores/VehicleModelStore'



function FilterModel() {

  const { vehicleData } = VehicleStore;

  const handleFilter = async (e) => {
    e.preventDefault();
    VehicleModelStore.pageNumber = 1
    let value = e.target.value;
    VehicleModelStore.searchQuery = `WHERE makeId = '${value}'`
    VehicleModelStore.getVehicleModels()
  }

  const handleReset = (e) => {
    e.preventDefault();
    VehicleModelStore.pageNumber = 1
    VehicleModelStore.searchQuery = null;
    VehicleModelStore.sortBy = "name|asc"
    VehicleModelStore.getVehicleModels()
  };


  return (
    <>
      <div className='filter-model'>
        <div className='filter-model-wrapper'>
          <p>Make</p>
        <div className='filter-checkbox'>
            {vehicleData.map ((item, index) => (
              <div className='filter-model-select' key={index} >
                <input type='checkbox' value={item.id} onChange={(e) => handleFilter(e)} />
                <label>{item.name}</label>
              </div>
              ))}  
            </div>
        </div>  
      </div>   
      <div className='filter-model'>
        <div className='filter-model-wrapper'>
            <p>Price</p>
          <div className='filter-price'>
            <input type="range" id="price" name="price" min="0" max="10" />
          </div>  
        </div> 
      </div>  
      <button  onClick={handleReset}>Reset Filters</button>
    </>
  )
}

export default inject("VehicleStore")(observer(FilterModel));
