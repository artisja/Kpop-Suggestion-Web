import React from 'react';
import './HeaderComponent.css';

class HeaderComponent extends React.Component{
  render() {
    return(
<div className="header-div">
<div>
  <h2 class="ui icon center aligned header">
    <i aria-hidden="true" class="users circular icon"></i>
    <div class="content">Friends</div>
  </h2>
  <div class="ui horizontal divider">Or</div>
</div>
</div>
)
  }
}

export default HeaderComponent;
