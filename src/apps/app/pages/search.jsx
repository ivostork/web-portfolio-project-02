import React from "react";
import InputWrap from "./../../core/inputWrap";
import InputText from "./../../core/inputText";

export default class Search extends React.Component {
  render() {
    let forms = ["Admission Form", "Declarative Form"];
    let citizenship = ["American", "Germany"];
    let name = ["Select a value", "Matin", "Tony"];

    let row1 = {
      id:206,
      fullName:"Ivo Stork",
      citizenship:"Czech",
      effectiveFrom:"2018/04/28 10:31:21",
      created:"2018/09/28 10:31:21",
      status:"active"
    };

    let row2 = {
      id:207,
      fullName:"Tony Montana",
      citizenship:"American",
      effectiveFrom:"2018/04/28 10:31:21",
      created:"2018/09/28 10:31:21",
      status:"pending"
    };

    let row3 = {
      id:208,
      fullName:"Joseph Fritz",
      citizenship:"German",
      effectiveFrom:"2018/04/28 10:31:21",
      created:"2018/09/28 10:31:21",
      status:"closed"
    };

    let row4 = {
      id:209,
      fullName:"Tony Stark",
      citizenship:"American",
      effectiveFrom:"2018/04/28 10:31:21",
      created:"2018/09/28 10:31:21",
      status:"active"
    };

    let allRows = [row1,row2,row3,row4];

    let allRowsJSX = allRows.map((item,index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fullName}</td>
          <td>{item.citizenship}</td>
          <td>{item.effectiveFrom}</td>
          <td>{item.created}</td>
          <td className="cell-center">
            <span className={"badge-status-"+item.status+""}>
              {item.status}
            </span>
          </td>
        </tr>
      ) 
    );



    return (
      <div>
        <h1>
        Search
        </h1>  

        <div className="mb-16">
          <h6>
            Search Criteria
          </h6>
          <div className="row">
            <div className="col-xs-12 col-sm-fluid">
              <InputWrap 
                label="Forms" 
                type="select" 
                inputItems={forms} />
            </div>
            <div className="col-xs-12 col-sm-fluid">
              <InputWrap 
                label="Citizenship" 
                type="select" 
                inputItems={citizenship} />
            </div>
            <div className="col-xs-12 col-sm-fluid">
              <InputWrap 
                label="First Name" 
                type="select" 
                inputItems={name} />
            </div>
          </div>
        </div>

        <div className="row mb-40">
          <div className="col-auto">
            <button type="button" className="btn-secondary">
              Clear
            </button>
          </div>
          <div className="col-auto">
            <button type="button" className="btn-primary">
              Search
            </button>
          </div>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Full Name</th>
                <th>Citizenship</th>
                <th>Effective From</th>
                <th>Created</th>
                <th className="cell-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {allRowsJSX}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}