import React from "react";
import { Route, Link } from "react-router-dom";

export default class ResponsiveHeader extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleNavigation();    
  }

  render () {
    return (     
      <div> 
        <div className="header-xxs-sm">
          <button type="button" className="hamburger" onClick={this.handleClick} type="button">
            <span className="sr-only">
              mobile navigation                  
            </span>
          </button>
          <div className="header-navigation-xxs-md">                                        
            <Link to="/" className="logo">
              <span className="sr-only">
                Link to code info
              </span>
            </Link>                      
          </div>
        </div> 
        <div className="header-md-xl">
        <Link to="/" className="logo">
          <span className="sr-only">
            Link to code info
          </span>
        </Link>
      </div> 
    </div>  
    );
  }
}