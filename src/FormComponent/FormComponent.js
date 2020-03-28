import React from 'react';
import './FormModal.js';
import { Modal,Button, Header,Image } from "semantic-ui-react";
import './FormComponent.css';



class FormComponent extends React.Component {
    state = { open: false }

    show = () => () => this.setState({open: true })
    close = () => this.setState({ open: false })

  render(){
    const { open, size } = this.state

    return (
      <div className="form-root">
      <h2 className="ui header">{this.props.sectionHeader}</h2>
      <div className="ui centered card">
    <div className="content">
      <img
        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        className="ui mini right floated image"
      />
      <div className="header">{this.props.song}</div>
      <div className="meta">{this.props.user}</div>
      <div className="description">
        Steve wants to add you to the group
        <strong>best friends</strong>
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <button className="ui button" onClick={this.show()} onClose={this.close}>Show Modal</button>
        <button className="ui red basic button">Decline</button>
      </div>
    </div>
    <Modal open={open}>
  <Modal.Header>Select a Photo</Modal.Header>
  <Modal.Content image>
    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
    <Modal.Description>
      <Header>Default Profile Image</Header>
      <p>
        We've found the following gravatar image associated with your e-mail
        address.
      </p>
      <p>Is it okay to use this photo?</p>
    </Modal.Description>
  </Modal.Content>
</Modal>
  </div>
      </div>
    );
  }
}


export default FormComponent;
