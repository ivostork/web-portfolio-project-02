import React from "react";
import {SvgIcons, SvgIcon} from "./../../core/SvgIcon";
import ButtonDropdown from "./../../core/ButtonDropdown";

export default class Buttons extends React.Component {           
  render() {
    var dropDownActions = ["Profile", "Manage", "Log off"];
    return (
      <div>
        <h1>
          Buttons
        </h1>
        <div className="mb-32">
          <p className="mb-8">Button primary</p>

          <button type="button" className="btn-primary">
            Primary button
          </button>
        </div>
        <div className="mb-32">
          <p className="mb-8">Button secondary</p>
          <button type="button" className="btn-secondary">
            Secondary button
          </button>
        </div>
        <div className="mb-32">
          <p className="mb-8">Button link</p>
          <button type="button" className="btn-link">
            Button link
          </button>
        </div>
        <div className="mb-32">
          <p className="mb-8">Button link</p>
          <button type="button" className="btn-pdf">
            <SvgIcon iconName="file" />
            Export to PDF
          </button>
        </div>
        <div className="mb-32">
          <p className="mb-8">Button personal details</p>
          <ButtonDropdown 
            title="Ivo Stork" 
            class="btn-dropdown-personal" 
            links={dropDownActions}
            >
            <SvgIcon iconName="userDetails" />
            <SvgIcon iconName="chevronDown" />
          </ButtonDropdown>
        </div>
      </div>
    );
  }
}