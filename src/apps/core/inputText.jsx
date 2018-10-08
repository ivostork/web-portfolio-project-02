import React from "react";

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {  

    let isReadOnly = this.props.readonlyvalue;

    // input type
    let whichControls = this.props.type;    
    let controls; 
    let classForInput;

    //input text
    if(whichControls === "text") {
      if(!isReadOnly) {
        controls = <input type="text" id={this.props.label} name={this.props.label} value={this.props.inputValue}/>;
        
      } else {
        controls = <input readOnly type="text" id={this.props.label} name={this.props.label} value={this.props.inputValue}/>;
      }
      classForInput="controls-text";      
    }

    //input select
    if(whichControls === "select") {      
      let renderItems = this.props.inputItems.map((item) =>
        <option key={item.toString()} value={item}>
          {item}
        </option>
      );

      if(!isReadOnly) {
        controls =       
        <select id={this.props.label} name={this.props.label}>
          {renderItems}
        </select>;
      } else {
        controls =       
        <select disabled id={this.props.label} name={this.props.label}>
          {renderItems}
        </select>;
      }
      classForInput="controls-select";
    }

    //input datepicker
    if(whichControls === "datepicker") {
      if(!isReadOnly) {
        controls = <input type="text" id={this.props.label} name={this.props.label}  defaultValue={this.props.inputValue}/>;
        
      } else {
        controls = <input readOnly type="text" id={this.props.label} name={this.props.label}  defaultValue={this.props.inputValue}/>;
      }
      classForInput="controls-datepicker";      
    }

    return (
      <div className={classForInput}>
        {controls}
      </div>
    );
  }
}