import React from "react";

function PuppyCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }
  
  export default PuppyCard;
  