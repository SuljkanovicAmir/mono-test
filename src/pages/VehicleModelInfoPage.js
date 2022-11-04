import React from 'react'
import { inject, observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import VehicleModelStore from '../stores/VehicleModelStore'

function VehicleModelInfo() {
  
  const { VehicleId } = useParams();
  const { vehicleModelData } = VehicleModelStore;
  const vehicle = vehicleModelData.filter(vehicle => vehicle.id === VehicleId)
  
  
  return (
    <>
        {vehicle.map((vehicle, index) => (
            <div className='vehicle' key={index}>
                <div>
                    {vehicle.name}
                    <img className='vehicle-model-img' src={vehicle.imgSrc} alt={vehicle.name} />
                </div>
          </div>
        ))}
    </>
  )
}

export default inject("VehicleModelStore")(observer(VehicleModelInfo));
