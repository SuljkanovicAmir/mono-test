import { inject, observer } from 'mobx-react'
import React, { useState, useEffect } from 'react'
import VehicleModelStore from '../stores/VehicleModelStore'
import EditModel from './EditModel'
import Pagination from '../components/Pagination'
import EditImg from '../assets/images/editImg.png'
import DeleteModel from './DeleteModel'
import { NavLink } from 'react-router-dom'




const VehicleModelList = () =>  {

  const { vehicleModelData } = VehicleModelStore;
 
  useEffect(() => {
    VehicleModelStore.getVehicleModels();    
  },[])
  

  const [active, setActive] = useState(false)
  const [modelId, setModelId] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editImgSrc, setEditImgSrc] = useState("");
  const [makeId, setMakeId] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    VehicleModelStore.pageNumber = 1
    VehicleModelStore.searchQuery = null;
    VehicleModelStore.sortBy = "name|asc"
    VehicleModelStore.getVehicleModels()

  };

  const handleClick = e => {
    setActive(current => !current);
  };

 
  return (
    <>
      <div className='vehicle-model-list'>
        <div className='total-number'> 
          <p>
            Total Cars ({VehicleModelStore.totalRecords})
          </p>
        </div>
        <div className='clear-all'> 
          <button onClick={handleReset}>
            Reset Filters
          </button>
        </div>
      {vehicleModelData.map((vehicle, index) => (
            <div className='vehicle-model-card' key={index}>
              <div className='vehicle-model-img-div'> 
                <NavLink activeclassname="active"   key={index} to={`/home/${vehicle.id}`}>
                    <img className='vehicle-model-img' src={vehicle.imgSrc} alt={vehicle.name} />
                </NavLink>
              </div>       
              <div className='vehicle-model-description'>
                {vehicle.name}
                <div className='vehicle-model-buttons'>
                  <button onClick={e =>  {handleClick(e); 
                                          setModelId(vehicle.id); 
                                          setMakeId(vehicle.makeId); 
                                          setEditValue(vehicle.name); 
                                          setEditImgSrc(vehicle.imgSrc)}}>
                      <img src={EditImg} alt="edit" />
                  </button>  
                  <DeleteModel vehicleId={vehicle.id} />
                </div>
              </div>
            </div>
         
      ))}
          <Pagination />
      </div>
      <EditModel 
        editId={modelId} 
        makeId={makeId} 
        active={active} 
        editValue={editValue} 
        setEditValue={setEditValue} 
        editImgSrc={editImgSrc} 
        handleClick={handleClick}
      />
    </>
)}

export default inject("VehicleModelStore")(observer(VehicleModelList));
