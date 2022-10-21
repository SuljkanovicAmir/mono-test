import React from 'react'
import { inject, observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import VehicleStore from '../stores/VehicleStore';

function VehicleMake() {
  
    const { VehicleId } = useParams();
    const { vehicleData } = VehicleStore;
    const vehicle = vehicleData.filter(vehicle => vehicle.id === VehicleId)
   
  return (
    <>
        {vehicle.map((vehicle, index) => (
            <div className='vehicle' key={index}>
                <div>
                    {vehicle.name}
                    <img className='vehicleMakeImg' src={vehicle.imgSrc} alt={vehicle.name} />
                </div>
          </div>
        ))}
    </>
  )
}

export default inject("VehicleStore")(observer(VehicleMake));
