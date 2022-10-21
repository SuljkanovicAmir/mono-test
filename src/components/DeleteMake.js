import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';


function DeleteMake({vehicleId}) {

    const handleDelete = async (e) => {
        e.preventDefault();
        VehicleStore.deleteVehicle(vehicleId, {})
    }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default inject("VehicleStore")(observer(DeleteMake)); 
