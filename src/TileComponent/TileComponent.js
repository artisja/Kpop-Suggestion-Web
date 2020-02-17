import React from 'react';
import './TileComponent.css';

// just the border and configs for it pass component types in main app.js
class TileComponent extends React.Component{
  render() {
    return(
   <div className="tile-root">
   <h2 class="ui header">Component Title</h2>
    <div className="ui cards">
    <div className="ui centered card">
      <div className="content">
        <img className="right floated mini ui image" src={require('./usoppTest.png')}  alt="Sogeking"/>
        <div className="header">
          Usopp
        </div>
        <div className="meta">
        Sniper for Straw Hat Pirates
        </div>
        <div className="description">
        Latest Likes: Hinds- Bamboo, Mamamoo- Universe
        </div>
      </div>
            <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui basic green button">Approve</div>
                  <div class="ui basic red button">Decline</div>
                </div>
            </div>
          </div>
      </div>
    </div>
)
  }
}

export default TileComponent;
