import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="card-img" />
      <div>
        <h1 className="card-title">{props.name}</h1>
        <p>{props.description}</p>
        <div className="card-price">
          <h3>{props.value}</h3>
          <BsFillBagFill className="bag-icon" />
        </div>
      </div>
    </div>
  );
}

export default Card;
