import React from "react";
import InputWrap from "./../../core/inputWrap";
import InputText from "./../../core/inputText";


export default class Badges extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Datepicker
        </h1>

        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <InputWrap label="From" type="datepicker" />
          </div>
          <div className="col-sm-12 col-lg-3">
            <InputWrap label="To" type="datepicker" description="This option is temporary disabled" readonly="true"/>
          </div>
        </div>
      </div>
    );
  }
}