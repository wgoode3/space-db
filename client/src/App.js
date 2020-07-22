import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Planets from './components/Planets';
import PlanetForm from './components/PlanetForm';


function App() {
  return (
    <div className="container">
      <PlanetForm />
      <Planets />
    </div>
  );
}

export default App;
