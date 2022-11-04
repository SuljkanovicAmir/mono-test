import React, {useState}from 'react'
import { inject, observer } from 'mobx-react'
import VehicleStore from '../stores/VehicleStore';
import CloseImg from '../assets/images/close.svg'
import VehicleModelStore from '../stores/VehicleModelStore'




function AddNewModel ({active, handleClick}) {

  const [modelName, setModelName] = useState([]);
  const [makeId, setMakeId] = useState([]);
  const [imgSrc, setImgSrc] = useState([]);

  const { vehicleData } = VehicleStore;

    const handleAdd = async (e) => {
        e.preventDefault();
        VehicleModelStore.addVehicleModel({
        name: `${modelName}`,
        makeId: `${makeId}`,
        imgSrc: `${imgSrc}`
       })
       e.target.reset();
    }


  return (
    <div className={active ? 'add-model show' : 'add-model'}>
        <form onSubmit={e => {handleAdd(e); handleClick(e)}}>
            <button type='submit' className='addButton'>
                Add
            </button>
            <select
                onChange={(e) => setMakeId(e.target.value)}
            >
              <option defaultValue hidden className='firstOption' required>Select Manufacturer</option>
            {vehicleData.map ((item, index) => (
              <option value={item.id} key={index}>{item.name}</option>
            ))};   
            </select>
            <input 
                type={'text'} 
                maxLength="25" 
                placeholder='Model name'
                onChange={(e) => setModelName(e.target.value)}
                />
             <input 
                type={'text'} 
                placeholder='Model image url'
                onChange={(e) => setImgSrc(e.target.value)}
                />
        </form>
        <button onClick={e => handleClick(e)} className='closeInput'>
          <img src={CloseImg} alt='search'/>
        </button>
    </div>
  )
}

export default inject("VehicleStore")(observer(AddNewModel)); 
