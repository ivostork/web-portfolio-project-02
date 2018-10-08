import React from "react";

export default class Typography extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Typography
        </h1>
        <p className="mb-32">
          Tha base copy size is <strong>16/1.5</strong> and the base copy color is <strong>#333333</strong>
          <br/>
          Roboto is used for all copy. Roboto Regular, <strong>Roboto Bold</strong> and <span className="text-black">Roboto Black</span>
        </p>
        
        <div className="mb-32">
          <span>
            Main heading using element <strong>h1</strong>
          </span>
          <h1>
            Main Heading
          </h1>
        </div>

        <div className="mb-32">
        <span>
          Form category heading using element <strong>h6</strong>
        </span>
        <h6>
          Form category heading
        </h6>
        </div>

        <div className="mb-32">
          <span>
            Plain list using class <strong>.list</strong>
          </span>
          <ul className="list">
            <li>
              list item
            </li>
            <li>
              list item
            </li>
            <li>
              list item
            </li>
          </ul>
        </div>

      </div>
    );
  }
}