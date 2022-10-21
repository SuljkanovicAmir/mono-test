import React, {useEffect} from 'react'
import { inject, observer } from 'mobx-react'
import MainContainer from '../layouts/MainContainer'
import Nav from '../layouts/Nav'
import VehicleStore from '../stores/VehicleStore';




function Main() {  
  useEffect(() => {
    VehicleStore.getVehicles();    
  },[])

  return (
    <>
    <Nav/>
    <MainContainer />
    </>
  )
}

export default inject("VehicleStore")(observer(Main));
