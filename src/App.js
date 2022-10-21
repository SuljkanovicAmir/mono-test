import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'mobx-react';

import './assets/App.css';
import VehicleStore from './stores/VehicleStore';
import Main from './components/Main';

function App() {

  return (
    <Provider VehicleStore={VehicleStore}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
