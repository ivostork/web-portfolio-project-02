import React from "react";
import { withRouter } from 'react-router-dom';

class CustomLink extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {    
    this.props.history.push(this.props.path);
    if(this.props.isLightboxOn) {
      this.props.handleCloseButton();
    }
  }

  render() {
    let pathname = this.props.history.location.pathname;
    let activeClass = ((pathname === this.props.path) || ((pathname === "/") && (this.props.name == "Inbox") )) ? "active" : "";     

    return(
      <button type="button" onClick={this.handleClick} className={activeClass}>
        {this.props.name} 
      </button>
    );
  }
}

export default withRouter(CustomLink)