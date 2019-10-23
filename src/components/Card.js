import React from "react";


const PuppyCard = (props) => (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} onClick={() => props.onClick(props.id)} clicked={props.clicked}/>
        </div>
      </div>
    );
  
  export default PuppyCard;
  