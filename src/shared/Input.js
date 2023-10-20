import React from "react";
import "./Input.css";
function Input(props) {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={props.handlechange}
        type="radio"
        name={props.name}
        value={props.value}
      />
      <span
        className="checkmark"
        style={{ backgroundColor: props.color }}
      ></span>
      {props.title}
    </label>
  );
}

export default Input;
