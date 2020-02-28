import React from 'react';
import './TileComponent.css';

// just the border and configs for it pass component types in main app.js
class TileComponent extends React.Component{
  render() {
    return(
   <div className="tile-root">
   <h2 class="ui header">{this.props.sectionHeader}</h2>
    <div className="ui cards">
    <div className="ui centered card">
      <div className="content">
        <img className="right floated mini ui image" src={require('./usoppTest.png')}  alt="Sogeking"/>
        <div className="header">
          {this.props.userHeader}
        </div>
        <div className="meta">
        {this.props.descript}
        </div>
        <div className="description">
        {this.props.likes}
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
