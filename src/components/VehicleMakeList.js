import { inject, observer } from 'mobx-react'
import React, { useState, useEffect } from 'react'
import VehicleStore from '../stores/VehicleStore'
import { NavLink } from "react-router-dom";
import EditMake from './EditMake'
import DeleteMake from './DeleteMake'
import Pagination from '../components/Pagination';


const VehicleMakeList = () =>  {

  const { vehicleData } = VehicleStore;

  useEffect(() => {
    VehicleStore.getVehicles();    
  },[])

  const [active, setActive] = useState(false)
  const [makeId, setMakeId] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editImgSrc, setEditImgSrc] = useState("");


  const handleClick = e => {
    e.preventDefault()
    setActive(current => !current);
};


  return (
    <>
    <div className='vehicleMakeGrid'>
    {vehicleData.map((vehicle, index) => (
      <NavLink activeclassname="active" className={"tab"}  key={index} to={`/home/${vehicle.id}`}>
        <div className='vehicleMake'>{vehicle.name}
         <img className='vehicleMakeImg' src={vehicle.imgSrc} alt={vehicle.name} />
         <div className='vehicleMakeButtons'>
          <DeleteMake vehicleId={vehicle.id} />
          <button onClick={e => {handleClick(e); setMakeId(vehicle.id); setEditValue(vehicle.name); setEditImgSrc(vehicle.imgSrc)}}>Edit</button>  
         </div>
        </div>
      </NavLink>
    ))}
    </div>
    <EditMake editId={makeId} active={active} editValue={editValue} setEditValue={setEditValue} editImgSrc={editImgSrc} handleClick={handleClick}/>
    <Pagination/>
    </>
)}

export default inject("VehicleStore")(observer(VehicleMakeList));
