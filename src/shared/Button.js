import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <button onClick={props.onClickHandler} value={props.value} className="bts">
      {props.children}
    </button>
  );
}

export default Button;
