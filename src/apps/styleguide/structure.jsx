import React from "react";
import NavigationLightbox from './navigationLightbox';
import ResponsiveHeader from './responsiveHeader';
import Navigation from './navigation';

import { Route, Link } from "react-router-dom";

import CodeInfo from "./pages/codeinfo";
import Colors from "./pages/colors";
import Grid from "./pages/grid";
import Typography from "./pages/typography";
import Buttons from "./pages/buttons";
import Icons from "./pages/icons";
import InputsSelects from "./pages/inputsselects";
import Datepicker from "./pages/datepicker";
import CheckboxesRadios from "./pages/checkboxesradios";
import SegmentedControls from "./pages/segmentedcontrols";
import Badges from "./pages/badges";
import Tables from "./pages/tables";

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
    
    let links = [
      {
        path:"/colors",
        name:"Colors",
      },
      {
        path:"/grid",
        name:"Grid",
      },
      {
        path:"/typography",
        name:"Typography",
      },
      {
        path:"/icons",
        name:"Icons",
      },
      {
        path:"/buttons",
        name:"Buttons",
      },      
      {
        path:"/inputsselects",
        name:"Inputs, selects",
      },
      {
        path:"/datepicker",
        name:"Datepicker",
      },
      {
        path:"/checkboxesradios",
        name:"Checkboxes, radio buttons",
      },
      {
        path:"/badges",
        name:"Badges",
      },
      {
        path:"/tables",
        name:"Tables",
      }
    ];
    
    return (
      <div>
        {/* space for lightbox */} 
        <NavigationLightbox closeNavigation={this.handleCloseButton} isLightboxOn={this.state.isLightboxOn}>
          <Navigation handleCloseButton={this.handleCloseButton} isLightboxOn={this.state.isLightboxOn} links={links}/>                
        </NavigationLightbox>
        <div>
          <div className="header">
            <div className="container">
              <ResponsiveHeader toggleNavigation={this.handleNavigationButton} />                    
            </div>
          </div>        
          <div className="container">
            <div className="layout">
              <div className="navigation">                
                <Navigation handleCloseButton={this.handleCloseButton} isLightboxOn={this.state.isLightboxOn} links={links}/>                
              </div>
              <div className="content">          
                  <Route exact path="/" component={CodeInfo} />          
                  <Route path="/colors" component={Colors} />
                  <Route path="/grid" component={Grid} />
                  <Route path="/typography" component={Typography} />
                  <Route path="/icons" component={Icons} />
                  <Route path="/buttons" component={Buttons} />
                  <Route path="/inputsselects" component={InputsSelects} />
                  <Route path="/datepicker" component={Datepicker} />
                  <Route path="/checkboxesradios" component={CheckboxesRadios} />
                  <Route path="/segmentedcontrols" component={SegmentedControls} />
                  <Route path="/badges" component={Badges} />
                  <Route path="/tables" component={Tables} />          
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}