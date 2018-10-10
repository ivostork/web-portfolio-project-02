import React from "react";
import CustomLink from './customLink';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let renderedLinks = this.props.links.map((item, index) => 
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