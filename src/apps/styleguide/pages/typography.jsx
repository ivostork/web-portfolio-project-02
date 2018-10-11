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
            Main heading used by element <strong>h1</strong>
          </span>
          <h1>
            Main Heading
          </h1>
        </div>

        <div className="mb-32">
        <span>
          Table heading used by element <strong>h6</strong>
        </span>
        <h6>
          Table heading
        </h6>
        </div>      
      </div>
    );
  }
}