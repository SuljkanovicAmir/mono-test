import React from 'react'
import SortModel from '../components/SortModel';
import FilterModel from '../components/FilterModel';
import CloseImg from '../assets/images/close.svg'



function VehicleModelSidebarPage({ activeSidebar, handleSidebar }) {

  return (
    <div className={activeSidebar ? 'sidebar show' : 'sidebar'}>
      <h3>Filter and sort</h3>
        <div className='filter-div'>
          <SortModel />
          <FilterModel />
        </div>
        <button onClick={handleSidebar} className='closeInput'>
          <img src={CloseImg} alt='search'/>
        </button>
        <div className='confirm-filters'>
          <button onClick={handleSidebar} className='confirm-filters'>
            Confirm Filters
          </button>
        </div>
      
    </div>
  )
}

export default VehicleModelSidebarPage