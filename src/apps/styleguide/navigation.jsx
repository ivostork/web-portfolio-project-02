import React from "react";
import CustomLink from './customLink';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
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

    let renderedLinks = links.map((item, index) => 
      (
        <div key={index}>
          <CustomLink path={item.path} name={item.name} handleCloseButton={this.props.handleCloseButton} isLightboxOn={this.props.isLightboxOn} />
        </div>
      )
    );
    

    return(
      <div>
        {renderedLinks}
      </div>
    );
  }
}