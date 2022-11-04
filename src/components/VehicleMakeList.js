import { inject, observer } from 'mobx-react'
import React, { useState, useEffect } from 'react'
import VehicleStore from '../stores/VehicleStore'
import EditMake from './EditMake'
import DeleteMake from './DeleteMake'
import VehicleModelStore from '../stores/VehicleModelStore'
import EditImg from '../assets/images/editImg.png'


const VehicleMakeList = () =>  {

  const { vehicleData } = VehicleStore;

  useEffect(() => {
    VehicleStore.getVehicles();    
  },[])

  const [active, setActive] = useState(false)
  const [makeId, setMakeId] = useState("")
  const [editValue, setEditValue] = useState("")
  const [editImgSrc, setEditImgSrc] = useState("")


  const handleClick = e => {
    e.preventDefault()
    setActive(current => !current);
  }

  const handleFilter = async (e) => {
    VehicleModelStore.pageNumber = 1
    VehicleModelStore.searchQuery = `WHERE makeId ='${e}'`
    VehicleModelStore.getVehicleModels()
  }

  return (
    <>
      <>
        {vehicleData.map((vehicle, index) => (
          <div className='vehicleMake' key={index} onClick={e => handleFilter(vehicle.id)}>
            <div className='vehicle-make-img-div'> 
              <img className='vehicleMakeImg' src={vehicle.imgSrc} alt={vehicle.name} />
            </div>
            <div className='vehicle-make-description'>
              {vehicle.name}
              <div className='vehicle-make-buttons'>
                <button onClick={e => {handleClick(e); setMakeId(vehicle.id); setEditValue(vehicle.name); setEditImgSrc(vehicle.imgSrc)}}><img src={EditImg} alt="edit" /></button>  
                <DeleteMake vehicleId={vehicle.id} />
              </div>
            </div>
          </div>
      ))}
      </>
      <EditMake editId={makeId} active={active} editValue={editValue} setEditValue={setEditValue} editImgSrc={editImgSrc} handleClick={handleClick}/>
    </>
)}

export default inject("VehicleStore")(observer(VehicleMakeList));
