import React from 'react'
import {Routes, Route} from 'react-router-dom';
import VehicleMake from '../pages/vehicleMake';
import VehicleMakePage from '../pages/VehicleMakePage';


function MainContainer() {
  return (
    <div className='mainContainer'>
        <Routes>
          <Route path="/" element={<VehicleMakePage />}/>
          <Route path="/home" element={<VehicleMakePage/>}/>   
          <Route path="/home/:VehicleId" element={<VehicleMake/>}/>  
        </Routes>
    </div>
  )
}

export default MainContainer