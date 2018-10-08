import React from "react";

export default class Buttons extends React.Component {
  render() {
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
      </div>
    );
  }
}