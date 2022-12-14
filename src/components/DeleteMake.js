import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';
import DeleteImg from '../assets/images/trash.svg'

function DeleteMake({vehicleId}) {

    const handleDelete = async (e) => {
        e.preventDefault();
        VehicleStore.deleteVehicle(vehicleId, {})
    }

  return (
    <button onClick={handleDelete}><img src={DeleteImg} alt='delete'/></button>
  )
}

export default inject("VehicleStore")(observer(DeleteMake)); 
