import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleModelStore from '../stores/VehicleModelStore'


function Pagination() {

const pageSet = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    VehicleModelStore.pageNumber = value
    VehicleModelStore.getVehicleModels()
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}


const PageArray = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i += 1) {
        array.push(i);
    }
    return array;
}


  return (
    <div className='pagination'>
        {PageArray(1, VehicleModelStore.totalPages).map((page) => (
            <button key={page} value={page} className="pageButton"  onClick={e => pageSet(e)}>{page}</button>
        ))}
    </div>
    
  )
}

export default inject("VehicleStore")(observer(Pagination));
