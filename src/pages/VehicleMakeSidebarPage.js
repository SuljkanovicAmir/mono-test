import React from 'react'
import SortMake from '../components/SortMake';
import FilterMake from '../components/FilterMake';

function VehicleMakeSidebarPage() {
  return (
    <div className='sidebar'>
        <FilterMake />
        <SortMake />
    </div>
  )
}

export default VehicleMakeSidebarPage