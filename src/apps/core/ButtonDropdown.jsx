import React from "react";
import { CSSTransition } from "react-transition-group";


export default class ButtonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOn: false
    };

    //which key was pressed
    this.keyCodePressed = 0;

    //stack with pointer to menu item with focu
    this.focusedMenuItem = [];

    //menu container ref
    this.menuContainer = React.createRef();

    //menu button ref
    this.menuButton = React.createRef();

    //handling events for menu button
    this.handleClickMenuButton = this.handleClickMenuButton.bind(this);
    this.handleKeyDownMenuButton = this.handleKeyDownMenuButton.bind(this);

    //handling events for menu button item
    this.handleKeyDownMenuButtonItem = this.handleKeyDownMenuButtonItem.bind(this);

  }

  initialiseFocusStack() {
    //initialise stack for menu items
    let lastMenuItem = this.props.links.length;

    for (let i = 0; i < lastMenuItem; i++) {
      this.focusedMenuItem[i] = i;
    }
  }

  //class methods
  componentDidMount() {
     this.initialiseFocusStack();
  }



  componentDidUpdate() {

    this.initialiseFocusStack();

    // menu has just opened using arrow DOWN
    if((this.keyCodePressed === 40)||(this.keyCodePressed === 32)||(this.keyCodePressed === 13)) {
      this.menuContainer.current.children[0].focus();
    }


    // menu has just opened using arrow UP
    if(this.keyCodePressed === 38) {
      let lastItem = this.menuContainer.current.children.length - 1;
      this.menuContainer.current.children[lastItem].focus();
    }


    // menu has just closed using ESC
    //focus needs to be on menu button
    if(this.keyCodePressed === 27) {
      this.menuButton.current.focus();
    }

  }

  toggleMenu() {
    this.setState(prevState => ({
      isDropdownOn: !prevState.isDropdownOn
    }));
  }

  openMenu() {
    if(!(this.state.isDropdownOn)) {
      this.toggleMenu();
    }
  }

  closeMenu() {
    if(this.state.isDropdownOn) {
      this.toggleMenu();
    }
  }

  //toggle for click
  handleClickMenuButton() {
    this.toggleMenu();
  }

  //open for arrow down, up
  handleKeyDownMenuButton(e) {
    //open for arrow DOWN - open and focus for the first item
    if(e.keyCode === 40) {
      //open Menu
      this.keyCodePressed = 40;
      this.openMenu();
    }
    //open for arrow UP - focus for the last item
    if(e.keyCode === 38) {
      //open Menu
      this.keyCodePressed = 38;
      this.openMenu();
    }
    //open for SPACE - focus for the first item
    if(e.keyCode === 32) {
      //open Menu
      this.keyCodePressed = 32;
      this.openMenu();
    }
    //open for ENTER - focus for the first item
    if(e.keyCode === 13) {
      //open Menu
      this.keyCodePressed = 13;
      this.openMenu();
    }
  }

  //open for arrow down, up
  handleKeyDownMenuButtonItem(e) {

    //DOWN
    if(e.keyCode === 40) {
      //item down or if on the last item go to the first one
      this.focusedMenuItem.push(this.focusedMenuItem.shift());
      this.menuContainer.current.children[this.focusedMenuItem[0]].focus();
    }

    //UP
    if(e.keyCode === 38) {
      //item up or if on the first item go to the last one
      this.focusedMenuItem.unshift(this.focusedMenuItem.pop());
      this.menuContainer.current.children[this.focusedMenuItem[0]].focus();
    }

    //HOME - 36
    if(e.keyCode === 36) {
      //reset focus stack
      this.initialiseFocusStack();
      //set focus for the first item
      this.menuContainer.current.children[0].focus();
    }

    //END - 35
    if(e.keyCode === 35) {
      //reset focus stack
      this.initialiseFocusStack();
      //set focus for the last item
      let lastItem = this.menuContainer.current.children.length - 1;
      this.menuContainer.current.children[lastItem].focus();
    }


    //ESC
    if(e.keyCode === 27) {
      this.keyCodePressed = 27;
      this.closeMenu();
      //item up or if on the first item go to the last one
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
            onKeyDown={this.handleKeyDownMenuButtonItem}
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
            ref={this.menuButton}
            >
          {this.props.children}
         <span className="btn-dropdown-title">
          {this.props.title}
         </span>                   
        </button>
        <CSSTransition
          in={this.state.isDropdownOn}
          timeout={300}
          classNames="btn-dropdown-menu-container"
          unmountOnExit
         >
          <div
              role="menu"
              className="btn-dropdown-menu"
              ref={this.menuContainer}>
            {this.getDropdDownActions()}
          </div>
        </CSSTransition>
      </div>
    );
  }
}