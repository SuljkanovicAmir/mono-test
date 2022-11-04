import React from 'react'
import {Routes, Route} from 'react-router-dom';
import VehicleModelInfoPage from '../pages/VehicleModelInfoPage';
import VehicleMakePage from '../pages/VehicleMakePage';
import VehicleModelPage from '../pages/VehicleModelPage';

function MainContainer() {
  return (
    <div className='main-container'>
        <Routes>
          <Route path="/" element={<VehicleModelPage />}/>
          <Route path="/home" element={<VehicleModelPage/>}/>   
          <Route path="/vehiclemake" element={<VehicleMakePage/>}/>  
          <Route path="/home/:VehicleId" element={<VehicleModelInfoPage/>}/>  
        </Routes>
    </div>
  )
}

export default MainContainer