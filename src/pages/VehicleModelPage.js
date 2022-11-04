import React, {useState} from 'react'
import VehicleModelSidebar from './VehicleModelSidebar';
import VehicleModelList from  '../components/VehicleModelList';
import VehicleModelHeaderPage from './VehicleModelHeaderPage';

function VehicleModelPage() {

  const [activeSidebar, setActiveSidebar] = useState(false);
  
  const handleSidebar = e => {
    setActiveSidebar(current => !current);
  };


  return (
    <div className='vehicle-model-div'>  
      <VehicleModelHeaderPage />
      <VehicleModelSidebar activeSidebar={activeSidebar} handleSidebar={handleSidebar}/>
      <div className='filter-button'> 
        <button  onClick={() => handleSidebar()}>Filter</button>
      </div>
      <VehicleModelList/>
    </div>
  )
}

export default VehicleModelPage


