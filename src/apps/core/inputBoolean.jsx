import React from "react";

export default class InputBoolean extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // input type
    let whichControls = this.props.type;    
    
    //html structrue
    let controlsClass;
    let controlsItems;
    
    let controlsFirsItem;

    //radio, checkbox
    if(whichControls === "radio" || whichControls === "checkbox") {
      controlsItems = this.props.inputItems.map((item, index) =>
        (                  
          <div className="controls-boolean-item" key={index}>
            <input type={whichControls} id={item} name={this.props.groupName} defaultChecked={(index === 0) ? "checked" : ""} />
            <span></span>
            <label htmlFor={item}>
              {item}
            </label>
          </div>
        )
      );
      controlsClass="controls-boolean";      
    }

    if(whichControls === "segmented") {
      
      controlsItems = this.props.inputItems.map((item,index) =>      
      (  
        <div className="controls-segmented-item" key={index}>                                                                      
          <input type="radio" id={item} name={this.props.groupName} defaultChecked={(index === 0) ? "checked" : ""} />                              
          <label htmlFor={item}>
            <span>
              {item}
            </span>
          </label>
        </div>
      )
      );
      controlsClass="controls-segmented";      
    }

    return (
      <div className={controlsClass}>
        {controlsItems}
      </div>
    );
  }
}