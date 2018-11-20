import React from "react";

export default class ButtonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOn: false
    };

    this.keyCodePressed = 0;

    this.menuContainer = React.createRef();
    this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
    this.handleKeyDownMenuButton = this.handleKeyDownMenuButton.bind(this);
  }

  //class methods
  toggleMenu() {
    this.setState(prevState => ({
      isDropdownOn: !prevState.isDropdownOn
    }));
  }

  componentDidUpdate() {

    // menu has just opened using arrow DOWN
    if(this.keyCodePressed === 40) {
      this.menuContainer.current.children[0].focus();
    }


    // menu has just opened using arrow UP
    if(this.keyCodePressed === 38) {
      let lastItem = this.menuContainer.current.children.length - 1;
      this.menuContainer.current.children[lastItem].focus();
    }


    // menu has just closed using ESC
    //focus needs to be on menu button

  }

  openMenu() {
    if(!(this.state.isDropdownOn)) {
      this.toggleMenu();
    }
  }

  //toggle for click
  handleClickMenuButton() {
    this.toggleMenu();
  }

  //open for arrow down, up
  handleKeyDownMenuButton(e) {
    //open for arrow down - open and focus for the first item
    if(e.keyCode === 40) {
      //open Menu
      this.keyCodePressed = 40;
      this.openMenu();
    }
    //open for arrow up - focus for the last item
    if(e.keyCode === 38) {
      //open Menu
      this.keyCodePressed = 38;
      this.openMenu();
    }
  }


  //helpful function for rendering buttons in menu
  getDropdDownActions() {
    let dropDownActions = this.props.links.map((item,index) => (
        <button
            key={index}
            role="menuitem"
            className={"btn-dropdown-item"}
            tabIndex="-1"
          >
          {item}
        </button>
      )
    );
    return dropDownActions;
  }

  render() {                
    return (
      <div className={"btn-dropdown-container " + this.props.class + ((this.state.isDropdownOn) ? " btn-dropdown-on" : "")}>
        <button
            className={"btn-dropdown"}
            type="button"
            onClick={this.handleClickMenuButton}
            onKeyDown={this.handleKeyDownMenuButton}
            aria-haspopup={true}
            aria-expanded={this.state.isDropdownOn}
            >
          {this.props.children}
         <span className="btn-dropdown-title">
          {this.props.title}
         </span>                   
        </button>        
        <div
            role="menu"
            className="btn-dropdown-menu"
            ref={this.menuContainer}>
          {this.getDropdDownActions()}         
        </div>
      </div>
    );
  }
}