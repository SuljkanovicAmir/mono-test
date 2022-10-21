import React, {useState}from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';
import CloseImg from '../assets/images/close.svg'




function AddNewMake({active, handleClick}) {

  const [makeName, setMakeName] = useState([]);

 
  

    const handleAdd = async (e) => {
        e.preventDefault();
        VehicleStore.addVehicle({
        name: `${makeName}`
       })
       e.target.reset();
    }


  return (
    <div className={active ? 'addMake show' : 'addMake'}>
        <form onSubmit={handleAdd}>
            <button type='submit' className='addButton'>
                Add
            </button>
            <input 
                type={'text'} 
                maxLength="25" 
                placeholder='Add new vehicle'
                onChange={(e) => setMakeName(e.target.value)}
                />
        </form>
        <button onClick={e => handleClick()} className='closeInput'>
          <img src={CloseImg} alt='search'/>
        </button>
    </div>
  )
}

export default inject("VehicleStore")(observer(AddNewMake)); 
