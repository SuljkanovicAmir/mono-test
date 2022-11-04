import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'mobx-react';

import './assets/App.css';
import VehicleStore from './stores/VehicleStore';
import VehicleModelStore from './stores/VehicleModelStore';
import Main from './components/Main';

function App() {

  return (
    <Provider VehicleStore={VehicleStore} VehicleModelStore={VehicleModelStore}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
