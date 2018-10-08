import React from "react";


export default class NavigationLightbox extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {    
    if (this.props.isLightboxOn) {
      //add class lock-scrolling to HTML      
      document.querySelector("html").setAttribute("class","lock-scrolling");
    } else {
      //remove class lock-scrolling from HTML      
      document.querySelector("html").removeAttribute("class","lock-scrolling");
    }
  }

  handleClick() {
    this.props.closeNavigation();    
  }
  
  render() {
    let lightboxStatusClass = ((this.props.isLightboxOn) ? " is-active" : ""); 
    
    let navigationStructureRender = (this.props.isLightboxOn) ? 
    <div className="lightbox-content">
        <div className="lightbox-header">
            <button type="button" className="lightbox-close" onClick={this.handleClick}>
              <span className="sr-only">
                close
              </span>
            </button>  
        </div>        
        <div className="lightbox-navigation">          
          <div className="navigation-meta mb-16">
              <span className="navigation-copy">Welcome George</span>
              <span className="navigation-divider" />
              <button type="button" className="navigation-logout">
                <span className="sr-only">logout</span>
              </button>
          </div>
          {this.props.children}
        </div>  
      </div> : null;
    
    return(              
      <div className={"lightbox" + lightboxStatusClass + ""}>          
        {/* opacity 0 by default */}
        <div className="lightbox-overlay" onClick={this.handleClick}/>
        {/* width,height specific but empty and pushed to the left */}
        <div className="lightbox-content-wrapper">
          {/* display none by default */}          
            {navigationStructureRender}          
        </div>
      </div>      
    );
  }
}