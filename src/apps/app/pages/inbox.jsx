import React from "react";
import InputWrap from "./../../core/inputWrap";
import InputText from "./../../core/inputText";

export default class Inbox extends React.Component {
  render() {
    let gender = ["Male", "Female", "Other"];
    let agreement = ["Yes", "No"];
    return (
      <div>
        <h1>
          Registration Form Detail
        </h1>

        <div className="row">
          <div className="col-xs-12 col-lg-6">


          <div className="mb-16">  
            <h6>
              Personal Details
            </h6>
            
            <InputWrap 
            label="Email Address" 
            type="text"
            inputValue="ivos.stork@gmail.com" />

            <div className="row">
              <div className="col-xs-12 col-sm-fluid">
                <InputWrap 
                  label="Record ID" 
                  type="text"
                  inputValue="320"
                  readonly="true" />
              </div>
              <div className="col-xs-12 col-sm-fluid">
                <InputWrap 
                  label="Membership Number" 
                  type="text"
                  inputValue="20" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-fluid">
                <InputWrap 
                  label="First Name" 
                  type="text"
                  inputValue="Ivo" />
              </div>
              <div className="col-xs-12 col-sm-fluid">
              <InputWrap 
                  label="Last Name" 
                  type="text"
                  inputValue="Stork" />
              </div>
              <div className="col-xs-12 col-sm-fluid">
              <InputWrap 
                  label="College Name" 
                  type="text"
                  inputValue="Ubo"
                  description="College Name can be shorter and more popular" />
              </div>
            </div>
            </div>

            <div className="mb-16">
            <h6>
              Contact
            </h6>

            <div className="row">
              <div className="col-xs-12 col-sm-fluid">
                <InputWrap 
                  label="Address" 
                  type="text"
                  inputValue="Oxford Street" />
              </div>
              <div className="col-xs-12 col-sm-fluid">
              <InputWrap 
                  label="City" 
                  type="text"
                  inputValue="London" />
              </div>
              <div className="col-xs-12 col-sm-fluid">
              <InputWrap 
                  label="ZIP" 
                  type="text"
                  inputValue="CR04RR"/>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-fluid">
                <InputWrap 
                  label="Mobile Phone" 
                  type="text"
                  inputValue="728000000" />
              </div>
              <div className="col-xs-12 col-sm-fluid">
                <InputWrap 
                  label="Home Phone" 
                  type="text"
                  inputValue="541111111" />
              </div>
            </div>
            </div>

            <div className="mb-16">
            <h6>
              Other Details
            </h6>

            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <InputWrap label="Date of Birth" type="datepicker" inputValue="13/1/1983" />
                
                <InputWrap 
                label="Gender"
                type="segmented"
                groupName="gender"
                inputItems={gender}/>
                
                <InputWrap 
                label="Agreement"
                type="segmented"
                groupName="agreement"
                inputItems={agreement}/>
              </div>
            </div>
          </div>          

        </div>
        </div>

        <hr className="divider" />

        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn-secondary">
              Reset
            </button>
          </div>
          <div className="col-auto">
            <button type="button" className="btn-primary">
              Submit
            </button>
          </div>
        </div>

      </div>
    );
  }
}