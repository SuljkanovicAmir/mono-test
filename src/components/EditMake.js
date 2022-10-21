import React from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';
import CloseImg from '../assets/images/close.svg'



function EditMake({ editId, active, editValue, setEditValue, handleClick, editImgSrc}) {

    
    const handleEdit = async (e) => {
        e.preventDefault();
        VehicleStore.updateVehicle(editId, {
            name: `${editValue}`,
            imgSrc: `${editImgSrc}`
       })
    }


  return (
    <div className={active ? 'addMake show' : 'addMake'}>
    <form onSubmit={(e) => {handleEdit(e); handleClick()}}>
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
        <button onClick={e => handleClick()} className='closeInput'>
          <img src={CloseImg} alt='search'/>
        </button>
    </div>
  )
}

export default inject("VehicleStore")(observer(EditMake)); 
