import React from "react";
import "./color.css";
import Input from "../../shared/Input";
function Color({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="test" value="" />
        <span className="checkmark all"></span>
        All
      </label>
      <div>
        <Input
          color="black"
          title="Black"
          value="black"
          name="test1"
          handleChange={handleChange}
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
      </div>
    </div>
  );
}

export default Color;
