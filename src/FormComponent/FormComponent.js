import React from 'react';
import './FormComponent.css';



class FormComponent extends React.Component {
  render(){
    return (
      <div className="form-root">
      <h2 class="ui header">{this.props.sectionHeader}</h2>
      <div class="ui centered card">
    <div class="content">
      <img
        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        class="ui mini right floated image"
      />
      <div class="header">{this.props.song}</div>
      <div class="meta">{this.props.user}</div>
      <div class="description">
        Steve wants to add you to the group
        <strong>best friends</strong>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <button class="ui green basic button">Approve</button>
        <button class="ui red basic button">Decline</button>
      </div>
    </div>
  </div>
      </div>
    );
  }
}

export default FormComponent;
