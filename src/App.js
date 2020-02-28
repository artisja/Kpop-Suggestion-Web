import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import TileComponent from './TileComponent/TileComponent.js';
import CreateSongComponent from './CreateSongComponent/CreateSongComponent.js';

function App() {
  return (
    <div className="App">
      <HeaderComponent name="Lee Hi"/>
      <div className="suggest-row">
        <TileComponent sectionHeader="Friend Section" userHeader="Usopp" descript="Sniper for Straw Hat Pirates" likes=" Latest Likes: Hinds- Bamboo, Mamamoo- Universe"/>
        <TileComponent sectionHeader="Friend Section" userHeader="Usopp" descript="Sniper for Straw Hat Pirates" likes=" Latest Likes: Hinds- Bamboo, Mamamoo- Universe"/>
      </div>
      <CreateSongComponent />
    </div>
  );
}

export default App;
