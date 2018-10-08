import React from "react";
import Navigation from './navigation';
import NavigationLightbox from './navigationLightbox';
import ResponsiveHeader from './responsiveHeader';

import { Route, Link } from "react-router-dom";

import Inbox from "./pages/inbox";
import Search from "./pages/search";


export default class Structure extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      isLightboxOn: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleNavigationButton = this.handleNavigationButton.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
  }

  handleNavigationButton() {
    this.setState(prevState => ({
      isLightboxOn: !prevState.isLightboxOn
    }));
  }

  handleCloseButton() {
    this.setState(() => ({
      isLightboxOn: false
    }));
  }

  render() {            
    return (
      <div>
        {/* space for lightbox */} 
        <NavigationLightbox closeNavigation={this.handleCloseButton} isLightboxOn={this.state.isLightboxOn}>
          <Navigation handleCloseButton={this.handleCloseButton} isLightboxOn={this.state.isLightboxOn} />                
        </NavigationLightbox>
        <div>
          <div className="header">
            <div className="container">
              <ResponsiveHeader toggleNavigation={this.handleNavigationButton}>
                <Navigation handleCloseButton={this.handleCloseButton} isLightboxOn={this.state.isLightboxOn} />                              
              </ResponsiveHeader>                                  
            </div>
          </div>        
          <div className="container">                         
            <div className="layout"> 
              <Route exact path="/" component={Inbox} />          
              <Route path="/inbox" component={Inbox} />
              <Route path="/search" component={Search} />                                                                 
            </div>          
          </div>
        </div>
      </div>
    );
  }
}