import React from 'react'
import { inject, observer } from 'mobx-react'
import CloseImg from '../assets/images/close.svg'
import VehicleModelStore from '../stores/VehicleModelStore'



function EditModel({ editId, active, editValue, setEditValue, handleClick, editImgSrc, makeId}) {

    
    const handleEdit = async (e) => {
        e.preventDefault();
        VehicleModelStore.updateVehicleModel(editId, {
            name: `${editValue}`,
            imgSrc: `${editImgSrc}`,
            makeId: `${makeId}`
       })
    }


  return (
    <div className={active ? 'addMake show' : 'addMake'}>
    <form onSubmit={(e) => {handleEdit(e); handleClick(e)}}>
            <button type='submit' className='addButton'>
                Confirm
            </button>
            <input 
                type='text'
                value={editValue}
                placeholder='Edit name'
                onChange={(e) => setEditValue(e.target.value)}
                />
        </form>
        <button onClick={e => handleClick(e)} className='closeInput'>
          <img src={CloseImg} alt='search'/>
        </button>
    </div>
  )
}

export default inject("VehicleModelStore")(observer(EditModel)); 
