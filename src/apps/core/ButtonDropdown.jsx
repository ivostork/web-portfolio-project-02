import React from "react";

export default class ButtonDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOn: false
    };

    this.handleDropdownButton = this.handleDropdownButton.bind(this);
  }

  handleDropdownButton() {
    this.setState(prevState => ({
      isDropdownOn: !prevState.isDropdownOn
    }));
  }  

  getDropdDownActions() {
    let dropDownActions = this.props.links.map((item,index) => (
        <button key={index} role="menuitem" className="btn-dropdown-item">
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
            type="button" onClick={this.handleDropdownButton}
            aria-haspopup={true}
            aria-expanded={this.state.isDropdownOn}>
          {this.props.children}
         <span className="btn-dropdown-title">
          {this.props.title}
         </span>                   
        </button>        
        <div role="menu" className="btn-dropdown-menu">
          {this.getDropdDownActions()}         
        </div>
      </div>
    );
  }
}