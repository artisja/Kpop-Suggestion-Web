import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import TileComponent from './TileComponent/TileComponent.js';

function App() {
  return (
    <div className="App">
      <HeaderComponent name="Lee Hi"/>
      <div className="suggest-row">
        <TileComponent />

      </div>
    </div>
  );
}

export default App;
