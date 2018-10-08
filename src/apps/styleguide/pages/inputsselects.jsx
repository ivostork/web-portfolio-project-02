import React from "react";
import InputWrap from "./../../core/inputWrap";
import InputText from "./../../core/inputText";

export default class InputsSelects extends React.Component {
  render() {

    let listOfStates = ["Czechia", "Austria"];
    let listOfDistricts = ["Moravia", "Bavaria"];
    let listOfCities = ["Brno", "Prague"];

    return (
      <div>
      <h1>
        Inputs, selects
      </h1>
      <h2>
        Text inputs
      </h2>

      <div className="row">
        <div className="col-sm-12 col-lg-fluid">
          <InputWrap 
            label="First Name" 
            type="text" />
        </div>
        <div className="col-sm-12 col-lg-fluid">
          <InputWrap 
            label="Second Name" 
            type="text" />
        </div>
        <div className="col-sm-12 col-lg-fluid">
          <InputWrap 
            label="Third Name" 
            type="text" 
            description="Third name is optional but quite common in Spain" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <InputWrap 
            label="Customer ID" 
            type="text" 
            readonly="true" />
        </div>            
      </div>
  
      <div className="row mb-20">
        <div className="col-sm-12 col-lg-4">
          <InputWrap 
            label="Bank Account Number" 
            type="text" 
            invalid="true" 
            validationMessage="Please insert correct format of Bank Account Number" />
        </div>            
      </div>
      <h2>
        Selects
      </h2> 
           
      <div className="row">
        <div className="col-sm-12 col-lg-fluid">      
            <InputWrap 
              label="State" 
              type="select" 
              inputItems={listOfStates} />
          </div>
          <div className="col-sm-12 col-lg-fluid">
            <InputWrap 
              label="District" 
              type="select" 
              inputItems={listOfDistricts}/>
          </div>
          <div className="col-sm-12 col-lg-fluid">
            <InputWrap 
              label="City" 
              type="select" 
              inputItems={listOfCities} 
              readonly="true"/>
          </div>
        </div>
      </div>
    );
  }
}