import React from "react";
import {SvgIcons, SvgIcon} from "./../../core/SvgIcon";



export default class Icons extends React.Component {
  render() {    
    let allIcons = Object.values(SvgIcons).map((item,index) => (
      <tr key={index}>
          <td className="cell-center">
            {console.log(<SvgIcon iconName={item.name} />)}
            <SvgIcon iconName={item.name} />
          </td>
          <td>{item.name}</td>         
          <td className="cell-right">{item.viewBox}</td>         
        </tr>
      )
    );    

    return (
      <div>
        <h1>
          Icons
        </h1>
        <div className="table">
        <table>
          <thead>
            <tr>
              <th>
                Icon
              </th>
              <th>
                Name
              </th>
              <th className="cell-right">
                ViewBox
              </th>
            </tr>
          </thead>
          <tbody>
            {allIcons}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}