import React from "react";


export default class Badges extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Badges
        </h1>
        <div className="mb-20">
          <span className="badge-status-active">
            active
          </span>
        </div>
        <div className="mb-20">
          <span className="badge-status-pending">
            pending
          </span>
        </div>
        <div className="mb-20">
          <span className="badge-status-closed">
            closed
          </span>
        </div>
      </div>
    );
  }
}