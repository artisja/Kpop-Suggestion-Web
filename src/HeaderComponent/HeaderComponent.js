import React from 'react';
import './HeaderComponent.css';

class HeaderComponent extends React.Component{
  render() {
    return(
<div>
<div className="header-div">
  <h2 className="ui icon center aligned header">
     <img src={require('./logo.png')}  alt="logo"/>
    <div className="content">K-Pop Suggestions</div>
  </h2>
</div>
<div className="ui horizontal divider">Art Industries</div>
</div>
)
  }
}

export default HeaderComponent;
