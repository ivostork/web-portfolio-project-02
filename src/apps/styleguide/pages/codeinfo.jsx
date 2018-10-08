import React from "react";

export default class CodeInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Code info
        </h1>
        <ul className="list">
          <li>
            Designed using Sketch
          </li>
          <li>
            Front end - Webpack project with SCSS and React
          </li>
        </ul>
        <p>
          You can find the code for the project on this <a href="">Github link</a>
        </p>
      </div>
    );
  }
}