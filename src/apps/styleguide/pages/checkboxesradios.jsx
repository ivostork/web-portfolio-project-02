import React from "react";
import InputWrap from "./../../core/inputWrap";
import InputText from "./../../core/inputBoolean";

export default class CheckboxesRadios extends React.Component {
  render() {

    let listOfPayments = ["Bank Account", "Direct Debit", "Paypal", "Other payment service"];
    let listOfFunds = ["Santander", "Barclays", "Lloyds", "Aviva"];

    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h1>
            Checkboxes, radios
          </h1>
          <div className="mb-20">
            <InputWrap 
              label="Payment method"
              type="radio"
              groupName="payment"
              inputItems={listOfPayments}/>
          </div>
          <div className="mb-20">
            <InputWrap 
              label="Funds"
              type="checkbox"
              groupName="fund"
              inputItems={listOfFunds}/>
            </div>
          </div>
      </div>
    );
  }
}