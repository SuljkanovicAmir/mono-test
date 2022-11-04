import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleModelStore from '../stores/VehicleModelStore'
import DeleteImg from '../assets/images/trash.svg'

function DeleteModel({vehicleId}) {

    const handleDelete = async (e) => {
        e.preventDefault();
        VehicleModelStore.deleteVehicleModel(vehicleId, {})
    }

  return (
    <button onClick={handleDelete}><img src={DeleteImg} alt='delete'/></button>
  )
}

export default inject("VehicleModelStore")(observer(DeleteModel)); 
