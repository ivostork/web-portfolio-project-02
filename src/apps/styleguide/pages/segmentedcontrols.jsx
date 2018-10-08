import React from "react";

import InputWrap from "./../../core/inputWrap";
import InputText from "./../../core/inputBoolean";

export default class SegmentedControls extends React.Component {
  render() {
    let gender = ["Male", "Female", "Other"];
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h1>
            Segmented controls
          </h1>
          <div className="mb-20">
            <InputWrap 
              label="Gender"
              type="segmented"
              groupName="gender"
              inputItems={gender}/>
          </div>
        </div>          
      </div>
    );
  }
}