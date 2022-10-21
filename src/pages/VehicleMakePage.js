import React from 'react'
import VehicleMakeList from '../components/VehicleMakeList';
import VehicleMakeSidebarPage from './VehicleMakeSidebarPage';

function VehicleMakePage() {
  return (
    <div className='vehicleMakeDiv'>  
       <VehicleMakeSidebarPage />
       <VehicleMakeList />
    </div>
  )
}

export default VehicleMakePage