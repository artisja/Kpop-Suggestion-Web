import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent.js';
import TileComponent from './TileComponent/TileComponent.js';
import FormComponent from './FormComponent/FormComponent.js';

function App() {
  return (
    <div className="App">
      <HeaderComponent name="Lee Hi"/>
      <div className="suggest-row">
        <TileComponent sectionHeader="Friend Section" userHeader="Usopp" descript="Sniper for Straw Hat Pirates" likes=" Latest Likes: Hinds- Bamboo, Mamamoo- Universe"/>
        <TileComponent sectionHeader="Auto-Suggest Section" userHeader="Usopp" descript="Sniper for Straw Hat Pirates" likes=" Latest Likes: Hinds- Bamboo, Mamamoo- Universe"/>
      </div>
      <div className="song-row" >
      <FormComponent sectionHeader="Send Song" song="Oprah Bank Account"/>
      <FormComponent sectionHeader="Create Song" user="Lil Yatchy"/>
      </div>
    </div>
  );
}

export default App;
